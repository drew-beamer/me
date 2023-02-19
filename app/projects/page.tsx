
import Card from "components/ui-components/card";
import { allProjects } from "contentlayer/generated";


export default function Projects() {
    return <section>
        <h1>PROJECTS</h1>
        <p>
            From sports analytics to birds, my portfolio features a diverse range
            of projects that showcase my creativity, versatility, and technical
            expertise.
        </p>
        <div className="container flex flex-wrap mt-6 justify-center items-center">
            {allProjects.map((project) => {
                console.log(project.projectImage)
                return <div key={project._id} className="sm:px-3 my-3 w-full max-w-[360px] md:w-1/2 lg:my-4">
                    <Card img={project.projectImage} alt="decor" categories={project.categories} text={project.description} title={project.title} />
                </div>
            })}
        </div>

    </section>

}