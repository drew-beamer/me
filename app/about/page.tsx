import TagCloudComponent from "components/misc/TagCloud"
import PageWrapper from "components/ui-components/pageWrapper"
import Link from "next/link"

export const metadata = {
    title: "About Me | Drew Beamer",
    description: "Learn more about Drew, a computer science student at Davidson College with a passion for designing minimalist web applications. Discover Drew's skills in data and web development. Get to know the person behind the code and explore Drew's portfolio of projects and photography.",
    openGraph: {
        title: "About Me",
        description: "Drew Beamer is a student at Davidson College, web developer and birder.",
    }
}

const TECHSTACK = [
    {
        value: "React",
        count: 35,
        color: "",
    },
    {
        value: "Next.js",
        count: 35
    },
    {
        value: "TypeScript",
        count: 35
    },
    {
        value: "Python",
        count: 35
    },
    {
        value: "Java",
        count: 20
    },
    {
        value: "pandas",
        count: 20,
    },
    {
        value: "numpy",
        count: 15,
    },
    {
        value: "Tableau",
        count: 20
    },
    {
        value: "MongoDB",
        count: 15,
    },
    {
        value: "Tensorflow",
        count: 10,
    },
    {
        value: "Pytorch",
        count: 10,
    },
    {
        value: "scikit-learn",
        count: 10,
    },
]

export default function About() {
    return <PageWrapper>
        <section className="pt-32">
            <h1>About Me</h1>
            <p>
                Hi, I'm Drew Beamer, a <strong>college student</strong> and <strong>aspiring software engineer</strong> with a passion for <strong>web development</strong> and <strong>data</strong>. On this website, I share my thoughts, experiences, and projects related to these topics, as well as birding and other miscellaneous topics. I started blogging in 2023 as a way to express my ideas and connect with others who share my enthusiasm.
            </p>
        </section>
        <section className="w-full">
            <h2>Technologies I Use</h2>
            <p>I work with the following technologies, sorted in approximate order of familiarity.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
                {TECHSTACK.map((item, index) => {
                    return <div className="bg-neutral-800 p-6 text-xl w-full rounded-xl font-medium">
                        {item.value}
                    </div>
                })}
            </div>

        </section>
        <section id="contact" className="pt-16">
            <h2>Get In Touch</h2>
            <p>
                Thank you for visiting my website. If you have any questions, comments, or feedback, feel free to send an email to <a href="mailto:andrewmbeamer@gmail.com">andrewmbeamer@gmail.com</a>.
            </p>
        </section>
    </PageWrapper>
}