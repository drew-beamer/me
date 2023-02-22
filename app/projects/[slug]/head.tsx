
import { projectFromSlug } from "lib/contentlayerHelpers";

export default function Head({ params }: { params: { slug: string } }) {

    const project = projectFromSlug(params.slug);

    return (
        <>
            <title>{`${project.title} | Project | Drew Beamer`}</title>
            <meta name='description' content={project.description}/>
            <meta name="og:title" content={project.title} />
            <meta name="og:url" content={"https://drewbeamer.vercel.app/posts/" + params.slug} />
            <meta name="og:image" content={"https://drewbeamer.vercel.app" + project.projectImage} />
            <meta name="og:site_name" content="Drew Beamer" />
        </>
    );
}