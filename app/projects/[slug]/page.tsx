
import { Button1 } from "components/ui-components/buttons";
import { allProjects } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
    return allProjects.map((post) => {
        if (post.url !== undefined) {
            return {
                slug: post.url.substring(9),
            }
        }
    });
}

const NextImage = (props) => {
    return <div className="rounded-[30px]">
        <Image src={props.src} {...props} className="rounded-[30px] px-4 py-4 relative bottom-4" />
    </div>
}


export default function ProjectPage({ params }) {
    const project = allProjects.find((post) => {
        return ("projects/" + params.slug === post.url)
    })

    const components = {
        Image: NextImage
    }

    const Content = useMDXComponent(project.body.code)

    return (
        <>
            <h1>{project.title}</h1>
            <article className="blogPost">
                <Content components={{ ...components }} />
            </article>
            <div className="hover:underline text-green-400"><Link href="/projects">← Return to Projects</Link></div>
        </>
    )
}