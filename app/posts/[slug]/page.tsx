

import Image from 'next/image'
import { allPosts } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'

export async function generateStaticParams() {
    return allPosts.map((post) => {
        if (post.url !== undefined) {
            return {
                slug: post.url.substring(6),
            }
        }
    });
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

    const post = allPosts.find((post) => {
        console.log(params, post)
        return ("posts/" + params.slug === post.url)
    })

    const components = {
        Image: NextImage,
        a: LinkWrapper
    }

    const Content = useMDXComponent(post.body.code)

    return (
        <>
            <article className="blogPost">
                <Content components={{ ...components }} />
            </article>

        </>
    )
}

export default PostLayout;