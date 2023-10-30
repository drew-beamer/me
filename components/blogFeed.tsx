import parseISO from "date-fns/parseISO";
import PostCard from "@/components/cards/post-card";
import { Post } from "contentlayer/generated";

export default function BlogFeed({ postData }: { postData: Post[] }) {
    const posts = postData.sort((a, b) => {
        return parseISO(b.date).getTime() - parseISO(a.date).getTime();
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
                {posts.slice(1).map(data => (
                    <PostCard variant="featured" key={data.slug} post={data} />
                ))}
            </ul>
        </div>
    );
}
