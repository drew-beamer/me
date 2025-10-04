import { getCollection } from "astro:content";

export async function getStaticPaths() {
  const projects = await getCollection("projects");
  return projects.map((project) => ({ params: { project: project.id } }));
}

export async function GET({ params }: { params: { project: string } }) {
  const allProjects = await getCollection("projects");
  const entry = allProjects.find((p) => p.id === params.project);

  if (!entry) {
    return new Response("Project not found", { status: 404 });
  }

  const { title } = entry.data;

  const markdown = `# ${title}\n\n${entry.body}`;

  return new Response(markdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
    },
  });
}

