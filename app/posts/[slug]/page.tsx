
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
        <Image src={props.src} {...props} />
    </div>

}

const PostLayout = ({ params }) => {
    const post = allPosts.find((post) => {
        return post.url === params.slug
    })

    const components = {
        Image: NextImage
    }

    const Content = useMDXComponent(post.body.code)

    return (
        <>
            <Content components={{ ...components }} />
        </>
    )
}

export default PostLayout;