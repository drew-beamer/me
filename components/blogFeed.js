import Link from "next/link";
import Image from "next/image";
import Date from "./date";

function PostCard({ postData }) {
    const { title, description, date, about, postImage, slug } = postData;
    const pageUrl = `${slug}`;
    return <div className="col-span-1 mb-6 rounded-lg bg-neutral-800 sm:col-span-3 sm:p-6">
        <div className="flex flex-wrap">
            <div className="relative aspect-square w-full rounded-lg sm:w-[25%]">
                <Image
                    src={postImage}
                    className="rounded-lg my-0"
                    style={{ objectFit: "cover" }}
                    fill
                    alt={title}
                />
            </div>
            <div className="max-h-[248px] w-full space-y-1 overflow-hidden text-ellipsis px-6 py-6 sm:w-[75%] sm:py-0">
                <h4 className="uppercase text-green-400 my-0">{about}</h4>
                <Link href={pageUrl}>
                    <h2 className="transition-colors hover:text-green-400 my-0">{title}</h2>
                </Link>
                <Date dateString={date} />
                <p className="mt-0">{description}</p>
            </div>
        </div>
    </div>;
}

export default function BlogFeed({ postData }) {
    const posts = postData.reverse();
    return (
        <div className="mt-4">
            <h2 className="w-full">Latest post</h2>
            <PostCard postData={posts[0]} />
            <h2 key={posts[0].slug} className="w-full">Others</h2>
            <ul className="pl-0 list-none">
                {posts.slice(1).map((postData) => (
                    <PostCard key={postData.slug} postData={postData} />
                ))}
            </ul>

        </div>
    );
}
