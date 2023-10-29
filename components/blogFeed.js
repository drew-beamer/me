import Link from "next/link";
import Image from "next/image";
import parseISO from "date-fns/parseISO";
import PostCard from "@/components/cards/post-card";
import Date from "./date";

export default function BlogFeed({ postData }) {
    const posts = postData.sort((a, b) => {
        return parseISO(b.date) - parseISO(a.date);
    });
    return (
        <div className="mt-4">
            <h2 className="w-full">Latest post</h2>
            <PostCard variant="featured" post={posts[0]} />
            <h2 key={posts[0].slug} className="w-full">
                Others
            </h2>
            <ul
                style={{ margin: 0, padding: 0 }}
                className="pl-0 list-none ml-0"
            >
                {posts.slice(1).map(postData => (
                    <PostCard
                        variant="featured"
                        key={postData.slug}
                        post={postData}
                    />
                ))}
            </ul>
        </div>
    );
}
