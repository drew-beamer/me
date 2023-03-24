import PageWrapper from "components/ui-components/pageWrapper"
import Link from "next/link"

export const metadata = {
    title: "About Me | Drew Beamer",
    description: "Drew Beamer is a student at Davidson College, web developer and birder.",
    openGraph: {
        title: "About Me",
        description: "Drew Beamer is a student at Davidson College, web developer and birder.",
    }
}

export default function About() {
    return <PageWrapper>
        <h1>ABOUT ME</h1>
        <section>
            <h2>Who Am I?</h2>
            <p>
                My name is Drew Beamer and I am a current student at Davidson College. I love to code and I am currently working on a few <Link href="/projects">projects</Link>.
                I specialize in web development and I am currently honing my skills in React and Next.js.
            </p>
            <p>
                Outside of coding, I am a birder and have seen over 850 species worldwide. You can check out my Instagram account <a href="https://www.instagram.com/crazed4birds/">@crazed4birds</a> to see some of my favorite photos.
            </p>
        </section>
        <section>
            <h2>What Do I Do?</h2>
            <p>I am currently working toward a major in Computer Science with an interdisciplinary minor in Genomics. I am hoping to go into software engineering post-graduation so that I can apply what I've learned in college to tackle real problems.</p>
        </section>
        <section>
            <h2>Contact Me</h2>
            <p>To contact me, I can be reached via email at <a href="mailto:andrewmbeamer@gmail.com">andrewmbeamer@gmail.com</a></p>
        </section>
    </PageWrapper>
}