import { getCollection } from "astro:content";
import { getFullUrl } from "@/lib/utils";

export async function GET() {
    const projects = await getCollection("projects");
    const projectsText = projects
        .sort(
            (a, b) =>
                b.data.priority - a.data.priority ||
                a.data.title.localeCompare(b.data.title),
        )
        .map(
            (project) =>
                `- [${project.data.title}](${getFullUrl(`/projects/${project.id}`)}): ${project.data.description}`,
        )
        .join("\n");

    const text = `# drewb.xyz

> The personal website of Drew Beamer, a software engineer.

This site details Drew's side projects and interests.

## Projects
${projectsText}`;

    return new Response(text, {
        headers: {
            "Content-Type": "text/markdown; charset=utf-8",
        },
    });
}
