

import Image from 'next/image'
import { allPosts } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { postFromSlug } from 'lib/contentlayerHelpers';

export async function generateStaticParams() {
    return allPosts.map((post) => {
        if (post.url !== undefined) {
            return {
                slug: post.url.substring(6),
            }
        }
    });
}

export async function generateMetadata({ params }) {
    const post = postFromSlug(params.slug);
    return {
        title: post.title,
        openGraph: {
            title: post.title,
            url: post.url,
            siteName: "Drew Beamer",
            images: [{
                url: "https://drewbeamer.vercel.app" + post.postImage,
                width: 720,
                height: 480
            }],
            locale: "en-US",
            type: "website"
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

const PostLayout = ({ params }) => {

    const post = postFromSlug(params.slug);

    const components = {
        Image: NextImage,
        a: LinkWrapper
    }


    if (post !== undefined) {
        const Content = useMDXComponent(post.body.code)
        return (
            <>
                <article className="blogPost">
                    <Content components={{ ...components }} />
                </article>

            </>
        )
    }
    return <div>Oops! There should be a post here...</div>

}

export default PostLayout;