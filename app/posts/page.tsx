
import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from 'next-contentlayer/hooks'
import BlogFeed from "../../components/blogFeed.js";



export default function PostsPage() {
    return <section>
        <h2>Recent posts</h2>
        <BlogFeed postData={allPosts} />
    </section>
}