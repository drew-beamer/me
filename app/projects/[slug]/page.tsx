import LinkWrapper from "@/components/blog-components/link-wrapper";
import NextImage from "@/components/blog-components/next-image";
import StandardPageWrapper from "components/page-wrapper";
import type { MDXComponents } from "mdx/types";
import { allProjects } from "contentlayer/generated";
import { projectFromSlug } from "lib/utils/contentlayerHelpers";
import { useMDXComponent } from "next-contentlayer/hooks";
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

const components: MDXComponents = {
    Image: NextImage,
    a: LinkWrapper,
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const project = projectFromSlug(params.slug);
    const Content = useMDXComponent(project.body.code);
    if (project !== undefined) {
        return (
            <>
                <Script id="project-data" type="application/ld+json">
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
                                <Content components={components} />
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
