import ProjectCard from "components/ui-components/card";
import PageWrapper from "components/ui-components/page-wrapper";
import { allProjects } from "contentlayer/generated";

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
    <PageWrapper>
      <section className="pt-32">
        <h1 className=" overflow-y-visible ">Projects</h1>
        <p>
          From sports analytics to birds, my portfolio features a diverse range
          of projects that showcase my creativity, versatility, and technical
          expertise.
        </p>
        <div className="mt-6 mx-auto grid grid-cols-1 sm:grid-cols-2  gap-4 w-full align-start">
          {allProjects
            .sort((a, b) => a.title.localeCompare(b.title))
            .map((project) => {
              return (
                <div
                  key={project._id}
                  className="w-full inline-block px-6 sm:px-0 mb-6 break-inside-avoid">
                  <ProjectCard
                    url={project.slug}
                    img={project.projectImage}
                    alt="decor"
                    categories={project.categories}
                    text={project.description}
                    title={project.title}
                  />
                </div>
              );
            })}
        </div>
      </section>
    </PageWrapper>
  );
}
