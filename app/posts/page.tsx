
import { allPosts } from "contentlayer/generated";
import BlogFeed from "../../components/blogFeed.js";



export default function PostsPage() {
    return <section className="w-full">
        <h1 className="w-full">Posts</h1>
        <p>
            This is where I share my thoughts, insights, and experiences 
            as a web developer, student, and birder. I hope you'll find these
            posts both informative and enjoyable!
        </p>
        <BlogFeed postData={allPosts} />
    </section>
}