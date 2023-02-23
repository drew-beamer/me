import PageWrapper from "components/ui-components/pageWrapper";
import Link from "next/link";

export const metadata = {
    title: "Privacy Policy",
    description: "A brief privacy policy for Drew Beamer's website.",
    openGraph: {
        title: "Privacy Policy",
        description: "A brief privacy policy for Drew Beamer's website."
    }
}

export default function Privacy() {
    return <PageWrapper>
        <section>
            <h1>PRIVACY</h1>
            <p>(Last updated: February 19)</p>
            <div className="my-2">
                <h2>Introduction</h2>
                <p>
                    I don't collect any user data on this site, and have not integrated
                    and analytics or cookies that I'm aware of. I'm a pretty big
                    advocate for data privacy (see <Link className="text-green-400 hover:underline" href="projects/hound">Hound</Link>),
                    and feel that collecting analytics on a portfolio website would be
                    a bit over the top.
                </p>
            </div>
            <div className="my-2">
                <h2>Contact</h2>
                <p>
                    For questions and/or comments on the privacy of the site, feel free
                    to reach out to me at <a className="text-green-400 hover:underline" href="mailto:andrewmbeamer@gmail.com">andrewmbeamer@gmail.com</a>
                </p>
            </div>
        </section>
    </PageWrapper>
}