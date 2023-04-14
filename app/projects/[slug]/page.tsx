import PageWrapper from "components/ui-components/pageWrapper";
import { allProjects } from "contentlayer/generated";
import { projectFromSlug } from "lib/contentlayerHelpers";
import { useMDXComponent } from "next-contentlayer/hooks";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";


export async function generateStaticParams() {
    return allProjects.map((project) => {
        return { slug: project.slug.split("/")[1] }
    });
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const project = projectFromSlug(params.slug);

    const { description, title, slug, projectImage } = project;

    return {
        title: project.title + " | Drew Beamer",
        description: description,
        openGraph: {
            title: title + " | Drew Beamer",
            description: description,
            url: "https://www.drewbeamer.io/projects/" + slug,
            images: [
                {
                    url: projectImage,
                    width: 720,
                    height: 480
                }
            ]
        }
    }
}

const NextImage = (props) => {
    return <div className="rounded-[30px]">
        <Image src={props.src} {...props} className="rounded-[30px] px-4 py-4 relative bottom-4" />
    </div>
}

export default function ProjectPage({ params }) {


    const project = projectFromSlug(params.slug);

    if (project !== undefined) {

        const components = {
            Image: NextImage
        }
        const Content = useMDXComponent(project.body.code)

        return (<>
            <script type="application/ld+json">
                {JSON.stringify(project.jsonLD)}
            </script>
            <PageWrapper>
                <article>
                    <section className="blogPost relative overflow-clip pt-32">
                        <div className="inline-block w-full">
                            <h1 >{project.title}</h1>
                        </div>

                        <div className="relative">
                            <Content components={{ ...components }} />
                        </div>
                        <div><Link href="/projects">← Return to Projects</Link></div>
                    </section>

                </article>
            </PageWrapper>
        </>
        )
    }
    return <div>
        Oops! There should be a project here...
    </div>

}