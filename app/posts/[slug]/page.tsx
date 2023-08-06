import Image from "next/image";
import Script from "next/script";
import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { postFromSlug } from "lib/contentlayerHelpers";
import PageWrapper from "components/ui-components/pageWrapper";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug.split("/")[1],
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const post = postFromSlug(params.slug);
  if (!post) return;

  const { title, slug, description, postImage, date } = post;

  return {
    title: title + " | Drew Beamer",
    description: description,
    openGraph: {
      title: title + " | Drew Beamer",
      description: description,
      url: "https://www.drewbeamer.io/posts/" + slug,
      type: "article",
      publishedTime: new Date(date).toISOString(),
      images: [
        {
          url: postImage,
          width: 720,
          height: 480,
        },
      ],
    },
  };
}

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

const NextImage = (props) => {
  return (
    <div className="blog-post-image">
      <Image
        src={props.src}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
        alt={props.alt}
        {...props}
        className="px-4 py-4 relative bottom-4"
      />
    </div>
  );
};

const LinkWrapper = (props) => {
  return (
    <a target={"_blank"} {...props}>
      {props.children}
    </a>
  );
};

export default function PostLayout({ params }): JSX.Element {
  const post = postFromSlug(params.slug);
  if (!post) {
    notFound();
  }

  const components = {
    Image: NextImage,
    a: LinkWrapper,
  };

  const jsonld = JSON.stringify(post.jsonLD);

  if (post !== null) {
    const Content = useMDXComponent(post.body.code);
    return (
      <>
        <Script type="application/ld+json">{jsonld}</Script>
        <article className="pt-32">
          <div className="blogPost prose-xl prose-invert">
            <h1>{post.title}</h1>
            <Content components={{ ...components }} />
          </div>
        </article>
      </>
    );
  }
  return <div>Oops! There should be a post here...</div>;
}
