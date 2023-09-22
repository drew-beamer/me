import Link from "next/link";
import { Button1 } from "components/ui-components/buttons";
import QuickLinks from "components/quick-links";

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
    <div>
      <section className="flex min-h-[calc(100vh-55px)] items-center text-center">
        <div className="relative top-[-110px] w-full">
          <span className="prose-invert prose-sm md:prose-base prose">
            <h3 className="mb-0">Hi there, I'm</h3>
          </span>
          <h1 className="mb-0 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-5xl font-bold tracking-wide text-transparent md:text-7xl">
            Drew Beamer
          </h1>
          <span className="prose-invert prose-sm md:prose-base prose">
            <h5 className="mt-0 tracking-wide">
              Student | Full-stack Engineer | Birder
            </h5>
          </span>
          <div className="relative mt-2 mb-4 z-0">
            <QuickLinks />
          </div>
          <div className="relative flex flex-row justify-center space-x-4 z-10">
            <Button1>
              <Link href="/about">About Me</Link>
            </Button1>
            <Button1>
              <Link href="/posts">Read Posts</Link>
            </Button1>
          </div>
        </div>
      </section>
    </div>
  );
}
