
import ProjectCard from "components/ui-components/card";
import { allProjects } from "contentlayer/generated";


export default function Projects() {
    return <section>
        <h1>PROJECTS</h1>
        <p>
            From sports analytics to birds, my portfolio features a diverse range
            of projects that showcase my creativity, versatility, and technical
            expertise.
        </p>
            <div className="mt-6 mx-4 sm:mx-0 columns-1 sm:columns-2 gap-4 w-full">
                {allProjects.sort((a, b) => a.title.localeCompare(b.title)).map((project) => {
                    return <div key={project._id} className="w-full px-6 sm:px-0 mb-6 break-inside-avoid  inline-block">
                        <ProjectCard url={project.url} img={project.projectImage} alt="decor" categories={project.categories} text={project.description} title={project.title} />
                    </div>
                })}
            </div>


    </section>

}