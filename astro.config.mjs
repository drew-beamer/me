import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import rehypeExternalLinks from "rehype-external-links";

// https://astro.build/config
export default defineConfig({
	adapter: vercel(),
	vite: {
		plugins: [tailwindcss()],
	},
	markdown: {
		rehypePlugins: [
			[
				rehypeExternalLinks,
				{
					target: "_blank",
					rel: "noopener noreferrer",
				},
			],
		],
	},
});
