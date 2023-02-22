
import { postFromSlug } from "lib/contentlayerHelpers";

export default function Head({ params }: { params: { slug: string } }) {

    const post = postFromSlug(params.slug);

    return (
        <>
            <title>{`${post.title} | Post | Drew Beamer`}</title>
            <meta name="og:title" content={post.title} />
            <meta name="og:url" content={"https://drewbeamer.vercel.app/posts/" + params.slug} />
            <meta name="og:image" content={"https://drewbeamer.vercel.app" + post.postImage} />
            <meta name="og:site_name" content="Drew Beamer" />
        </>
    );
}