
import Image from 'next/image'
import { allPosts } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { postFromSlug } from 'lib/contentlayerHelpers';
import PageWrapper from 'components/ui-components/pageWrapper';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return allPosts.map((post) => ({
        slug: post.slug
    }));
}


export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata | undefined> {
    const post = postFromSlug(params.slug);
    if (!post) return;

    const { title, slug, description, postImage, date } = post;

    return {
        title: title + " | Drew Beamer",
        description: description,
        openGraph: {
            title: title + " | Drew Beamer",
            description: description,
            url: "https://drewbeamer.vercel.app/posts/" + slug,
            type: "article",
            publishedTime: new Date(date).toISOString(),
            images: [
                {
                    url: postImage,
                    width: 720,
                    height: 480
                }
            ]
        }
    }
}

const NextImage = (props) => {
    return <div className="blog-post-image">
        <Image src={props.src} {...props} className="px-4 py-4 relative bottom-4" />
    </div>
}

const LinkWrapper = (props) => {
    return <a target={"_blank"} {...props}>{props.children}</a>
}

export default function PostLayout({ params }): JSX.Element {

    const post = postFromSlug(params.slug);
    if (!post) {
        notFound();
    }

    const components = {
        Image: NextImage,
        a: LinkWrapper
    }

    const jsonld = JSON.stringify(post.jsonLD);

    if (post !== null) {
        const Content = useMDXComponent(post.body.code);
        return (<article>
            <script type="application/ld+json">
                {jsonld}
            </script>
            <PageWrapper>
                <div className="blogPost prose-xl prose-invert prose-h1:text-green-400">
                    <h1>{post.title}</h1>
                    <Content components={{ ...components }} />
                </div>
            </PageWrapper>
            </article>
        )
    }
    return <div>Oops! There should be a post here...</div>

}