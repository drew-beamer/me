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
            <p className="my-4">
                My name is Drew Beamer and I am a current student at Davidson College. I love to code and I am currently working on a few <Link href="/projects">projects</Link>. 
                I specialize in web development and I am currently honing my skills in React and Next.js.
            </p>
            <p className="my-4">
                Outside of coding, I am a birder and have seen over 850 species worldwide. You can check out my Instagram account <a href="https://www.instagram.com/crazed4birds/">@crazed4birds</a> to see some of my favorite photos.
            </p>
            <p>Insert a brief description of yourself here, including your background, interests, and any relevant information that you'd like to share.</p>
        </section>
        <section>
            <h2>What Do I Do?</h2>
            <p>Explain your current occupation or what you're studying in school, and any notable achievements or experiences you've had in your career or education.</p>
        </section>
        <section>
            <h2>Contact Me</h2>
            <p>Include your contact information here, such as your email address or social media handles, so that visitors can easily get in touch with you.</p>
        </section>
    </PageWrapper>
}