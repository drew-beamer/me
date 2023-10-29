import ProjectCard from "@/components/cards/project-card";
import StandardPageWrapper from "@/components/page-wrapper";
import { Project, allProjects } from "contentlayer/generated";

export const metadata = {
    title: "Projects | Drew Beamer",
    description:
        "Explore my portfolio of web development projects, including data-driven web applications, responsive design, and user-focused interfaces. See examples of my work and learn more about my skills in software engineering, data analysis, and visualization, along with miscelaneous bird-related projects.",
    keywords: [
        "projects",
        "web development",
        "front-end development",
        "software engineering",
        "react",
        "next.js",
        "javascript",
        "responsive design",
        "birds",
        "bird photography",
        "student",
        "developer",
    ],
    creator: "Drew Beamer",
    openGraph: {
        title: "Projects",
        description:
            "Explore my portfolio of projects ranging from web development, data analysis, and social media apps. Discover how I apply my skills in computer science and design to create impactful solutions for real-world problems.",
    },
};

export default function Projects() {
    return (
        <StandardPageWrapper>
            <section>
                <h1 className="m-0">Projects</h1>
                <p className="lead">
                    From sports analytics to birds, my portfolio features a
                    diverse range of projects that showcase my creativity,
                    versatility, and technical expertise.
                </p>
                <div className="align-start mx-auto mt-6 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
                    {allProjects
                        .sort((a, b) => a.title.localeCompare(b.title))
                        .map((project: Project) => {
                            return (
                                <div key={project._id}>
                                    <ProjectCard {...project} />
                                </div>
                            );
                        })}
                </div>
            </section>
        </StandardPageWrapper>
    );
}
