import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';


export default function Post({ postData }) {

    const components = { Image };


    return <Layout>
        <Head>
            <title>{postData.title}</title>
        </Head>
        <article>
            <h1>{postData.title}</h1>
            <div>
                <Date dateString={postData.date} />
            </div>
            <MDXRemote {...postData.contentHtml} components={components}/>
        </article>
    </Layout>;
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    }
}