'use client';
import BlogFeed from "../../components/blogFeed";
import Layout from "../../components/layout";
import { getSortedPostsData } from "../../lib/posts";


export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        }
    }
}

export default function PostsPage({ allPostsData }) {
    return <Layout>
        <section>
            <h2>Recent posts</h2>
            <BlogFeed postData={allPostsData} />
        </section>
    </Layout>
}