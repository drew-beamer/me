
import { allPosts, allProjects } from "contentlayer/generated";

function generateSiteMap() {
    return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>https://www.drewbeamer.io/</loc>
            <priority>1.0</priority>
        </url>
        <url>
            <loc>https://www.drewbeamer.io/about</loc>
            <priority>1.0</priority>
        </url>
        <url>
            <loc>https://www.drewbeamer.io/projects</loc>
            <priority>1.0</priority>
        </url>
        <url>
            <loc>https://www.drewbeamer.io/posts</loc>
            <priority>1.0</priority>
        </url>
        <url>
        <loc>https://www.drewbeamer.io/utils/pomodoro</loc>
        <priority>0.75</priority>
    </url>
        <url>
            <loc>https://www.drewbeamer.io/legal/privacy</loc>
            <priority>0.5</priority>
        </url>${allPosts.map((post) => {
        return `
        <url>
            <loc>https://www.drewbeamer.io/${post.slug}</loc>
            <priority>0.75</priority>
        </url>`
    }).join("")}${allProjects.map((project) => {
        return `
        <url>
            <loc>https://www.drewbeamer.io/${project.slug}</loc>
            <priority>0.75</priority>
        </url>`
    }).join("")}
    </urlset>`
}

export async function GET() {
    return new Response(generateSiteMap(), {
        headers: {
            "content-type": "application/xml;charset=UTF-8"
        }
    });
}