import StandardPageWrapper from "@/components/page-wrapper";
import Link from "next/link";

export const metadata = {
    title: "Privacy Policy | Drew Beamer",
    description: "A brief privacy policy for Drew Beamer's website.",
    openGraph: {
        title: "Privacy Policy",
        description: "A brief privacy policy for Drew Beamer's website.",
    },
};

export default function Privacy() {
    return (
        <StandardPageWrapper>
            <section>
                <h1>Privacy Policy</h1>
                <p className="lead">(Last updated: March 23, 2023)</p>
                <div className="mt-2">
                    <h2 className="my-4">Introduction</h2>
                    <p>
                        I'm an advocate for data privacy (see{" "}
                        <Link href="/projects/hound">Hound</Link>), and feel
                        that it's important to be transparent about how I use
                        data.
                    </p>
                    <p className="my-4">
                        This privacy policy will help you understand how Drew
                        Beamer uses and protects the data you provide to me when
                        you visit and use{" "}
                        <a href="https://drewbeamer.io">
                            https://drewbeamer.io
                        </a>{" "}
                        ("site").
                    </p>
                    <p className="my-4">
                        This site serves as the home for my blog, portfolio, and
                        other projects. As such, it is not a commercial site. I
                        do not use analytics or advertising on the site.
                        However, I do use some third-party services (e.g.{" "}
                        <a href="https://search.google.com/search-console/about">
                            Google Search Console
                        </a>
                        ,{" "}
                        <a href="https://www.bing.com/toolbox/">
                            Bing Webmaster Tools
                        </a>
                        ) to help me understand performance and traffic
                        patterns. These services let me see general trends in
                        search performance. I do not (an do not believe I can)
                        use these services to track individual users. I have not
                        integrated any cookies that I'm aware of.
                    </p>
                </div>
                <div className="my-2">
                    <h2>Contact</h2>
                    <p>
                        For questions, comments, or concerns on the privacy of
                        the site, feel free to reach out to me at{" "}
                        <a href="mailto:andrewmbeamer@gmail.com">
                            andrewmbeamer@gmail.com
                        </a>
                    </p>
                </div>
            </section>
        </StandardPageWrapper>
    );
}
