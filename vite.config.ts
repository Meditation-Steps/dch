import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
	base: "/dch/",
	build: {
		outDir: "dist",
		emptyOutDir: true,
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				// Russian pages
				ruIndex: resolve(__dirname, "src/ru/index.html"),
				ruPage01: resolve(__dirname, "src/ru/page01.html"),
				ruPage02: resolve(__dirname, "src/ru/page02.html"),
				ruPage03: resolve(__dirname, "src/ru/page03.html"),
				ruPage05: resolve(__dirname, "src/ru/page05.html"),
				ruPage06: resolve(__dirname, "src/ru/page06.html"),
				ruPage07: resolve(__dirname, "src/ru/page07.html"),
				ruPage08: resolve(__dirname, "src/ru/page08.html"),
				ruPage09: resolve(__dirname, "src/ru/page09.html"),
				ruPage10: resolve(__dirname, "src/ru/page10.html"),
				ruPage11: resolve(__dirname, "src/ru/page11.html"),
				// English pages
				enIndex: resolve(__dirname, "src/en/index.html"),
				enPage01: resolve(__dirname, "src/en/page01.html"),
				enPage02: resolve(__dirname, "src/en/page02.html"),
				enPage03: resolve(__dirname, "src/en/page03.html"),
				enPage05: resolve(__dirname, "src/en/page05.html"),
				enPage06: resolve(__dirname, "src/en/page06.html"),
				enPage07: resolve(__dirname, "src/en/page07.html"),
				enPage08: resolve(__dirname, "src/en/page08.html"),
				enPage09: resolve(__dirname, "src/en/page09.html"),
				enPage10: resolve(__dirname, "src/en/page10.html"),
				enPage11: resolve(__dirname, "src/en/page11.html"),
			},
		},
	},
});
