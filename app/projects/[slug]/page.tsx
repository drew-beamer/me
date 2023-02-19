
import { allProjects } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

export async function generateStaticParams() {
    return allProjects.map((post) => {
        if (post.url !== undefined) {
            return {
                slug: post.url.substring(9),
            }
        }
    });
}

export default function ProjectPage({ params }) {
    const project = allProjects.find((post) => {
        console.log(params, post)
        return ("projects/" + params.slug === post.url)
    })

    const Content = useMDXComponent(project.body.code)

    return (
        <>
            <article className="blogPost">
                <Content />
            </article>

        </>
    )
}