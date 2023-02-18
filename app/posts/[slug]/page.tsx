
import { getAllPostIds, getPostData } from "../../../lib/posts";
import Head from "next/head";
import Date from "../../../components/date";
import Image from 'next/image'
import { allPosts, type Post } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'

export async function generateStaticParams() {
    return allPosts.map((post) => {
        if (post.url !== undefined) {
            return {
                slug: post.url,
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
        return post.url === params.slug
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