import NextImage from "@/components/blog-components/next-image";
import LinkWrapper from "@/components/blog-components/link-wrapper";
import Script from "next/script";
import StandardPageWrapper from "@/components/page-wrapper";
import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { postFromSlug } from "lib/contentlayerHelpers";

import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return allPosts.map(post => ({
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
        title: `${title} | Drew Beamer`,
        description,
        openGraph: {
            title: `${title} | Drew Beamer`,
            description,
            url: `https://www.drewbeamer.io/posts/${slug}`,
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
                <StandardPageWrapper>
                    <article>
                        <h1>{post.title}</h1>
                        <Content components={{ ...components }} />
                    </article>
                </StandardPageWrapper>
            </>
        );
    }
    return <div>Oops! There should be a post here...</div>;
}
