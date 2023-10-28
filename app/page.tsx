import Link from "next/link";
import QuickLinks from "components/quick-links";
import { Button } from "@/components/ui/button";
import animations from "@/styles/animations.module.css";

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

function ZoomLine({ width, delay }: { width?: number; delay: number }) {
  const w = width || 100;
  return (
    <div style={{ width: `${w}%` }}>
      <div
        style={{
          animation: `${animations.fadeoutLR} 500ms ease, ${animations.pulse} 5s ease infinite`,
          animationDelay: `${delay}ms`,
          animationFillMode: "both",
        }}
        className={`mx-4 rounded-full my-4 border-dashed h-1 ${
          Math.random() < 0.5 ? "bg-primary" : "bg-foreground"
        }`}></div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="w-full relative flex justify-center">
      <div className="absolute z-[-1] w-full flex justify-center flex-wrap space-x-4 px-2 sm:px-8 max-h-[calc(100vh-4rem)] overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <ZoomLine key={i} width={Math.random() * 35 + 15} delay={i * 25} />
        ))}
      </div>
      <section className="w-full flex flex-wrap items-center justify-around text-center">
        <div className="flex flex-col justify-center items-center w-full">
          <h1 className="text-4xl md:text-5xl font-bold mt-32 leading-relaxed">
            Hey, I'm{" "}
            <span
              className="px-2 font-bold"
              style={{
                backgroundSize: "200%",
                animation: `${animations.highlight} 500ms ease`,
                animationFillMode: "forwards",
                color: "hsl(var(--background))",
                backgroundImage:
                  "linear-gradient(to right, hsl(var(--background)) 50%, transparent 50%), linear-gradient(hsl(var(--primary)) 50%, hsl(var(--primary)) 50%)",
              }}>
              Drew Beamer
            </span>
          </h1>
          <p className="lead">I'm a student, web developer, and birder.</p>
          <div className="flex flex-row mt-8">
            <Link href="/about">
              <Button variant="default">Learn More</Button>
            </Link>
            <Link href="/projects">
              <Button variant="outline" className="ml-4">
                View Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
