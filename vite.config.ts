import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import { copyFileSync } from "fs";

export default defineConfig({
	plugins: [
		react(),
		{
			name: "copy-404",
			closeBundle() {
				// Copy index.html to 404.html for GitHub Pages SPA support
				copyFileSync(
					resolve(__dirname, "dist/index.html"),
					resolve(__dirname, "dist/404.html")
				);
			},
		},
	],
	base: "/dch/",
	build: {
		outDir: "dist",
		emptyOutDir: true,
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
			},
		},
	},
});
