import StandardPageWrapper from "components/page-wrapper";
import { allProjects } from "contentlayer/generated";
import { projectFromSlug } from "lib/contentlayerHelpers";
import { useMDXComponent } from "next-contentlayer/hooks";

import Image, { ImageProps } from "next/image";
import Link from "next/link";
import Script from "next/script";

export async function generateStaticParams() {
    return allProjects.map(project => {
        return { slug: project.slug.split("/")[1] };
    });
}

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}) {
    const project = projectFromSlug(params.slug);

    const { description, title, slug, projectImage } = project;

    return {
        title: `${project.title} | Drew Beamer`,
        description,
        openGraph: {
            title: `${title} | Drew Beamer`,
            description,
            url: `https://www.drewbeamer.io/projects/${slug}`,
            images: [
                {
                    url: projectImage,
                    width: 720,
                    height: 480,
                },
            ],
        },
    };
}

function NextImage(props: ImageProps) {
    return <Image {...props} className={`rounded-lg ${props.className}`} />;
}

export default function ProjectPage({ params }) {
    const project = projectFromSlug(params.slug);

    if (project !== undefined) {
        const components = {
            Image: NextImage,
        };
        const Content = useMDXComponent(project.body.code);

        return (
            <>
                <Script type="application/ld+json" strategy="beforeInteractive">
                    {JSON.stringify(project.jsonLD)}
                </Script>
                <StandardPageWrapper>
                    <article>
                        <section className="blogPost relative overflow-clip">
                            <div className="inline-block w-full">
                                <h1 className="mb-0">{project.title}</h1>
                                <p className="lead">{project.description}</p>
                            </div>
                            <div className="relative">
                                <Content components={{ ...components }} />
                            </div>
                            <div>
                                <Link href="/projects">
                                    ← Return to Projects
                                </Link>
                            </div>
                        </section>
                    </article>
                </StandardPageWrapper>
            </>
        );
    }
    return <div>Oops! There should be a project here...</div>;
}
