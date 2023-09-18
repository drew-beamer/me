import Image from "next/image";
import { GithubIcon, InstagramIcon } from "../components/icons";
import Link from "next/link";
import PageWrapper from "components/ui-components/pageWrapper";
import { Button1 } from "components/ui-components/buttons";

const quickLinkData = [
  {
    component: <GithubIcon size="24" />,
    url: "https://github.com/drew-beamer",
    text: "see my code",
  },
  {
    component: <InstagramIcon size="24" />,
    url: "https://www.instagram.com/crazed4birds/",
    text: "check out my photography",
  },
];

export const metadata = {
  title: "Drew Beamer | Student, Web Developer, Birder",
  description:
    "Welcome to Drew's Portfolio! As a computer science student at Davidson College, I love designing and coding minimalist, data-driven web applications. Explore my projects and blog to see my passion for technology, creativity, and continuous learning.",
  openGraph: {
    title: "Drew Beamer - Student, Web Developer, Birder",
    description:
      "Drew is a web developer and computer science student at Davidson College. This is his portfolio and blog site.",
  },
};

export default function Home() {
  return (
    <PageWrapper>
      <section className="py-32 flex items-center min-h-screen">
        <div>
          <h2>Hi there, I'm</h2>
          <h1>Drew Beamer</h1>
          <p className="mb-0">
            I'm a computer science student at Davidson College, pursuing a
            career in software engineering.
          </p>
          <div className="mt-3">
            <Button1>
              <Link href="/about">Learn more</Link>
            </Button1>
          </div>
        </div>
      </section>
      <section>
        <h2>About Me</h2>
        <p>
          As a passionate college student with a love for birding, web
          development, and data analysis, I am constantly seeking to expand my
          knowledge and explore new opportunities. Through my blog, I share my
          personal experiences and insights on topics that fascinate me, while
          also providing valuable information on data privacy and technology.
          With a keen eye for detail and a drive to succeed, I am dedicated to
          making a positive impact in the world of technology and beyond.
        </p>
      </section>
    </PageWrapper>
  );
}
