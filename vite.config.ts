import { createPathTransform } from "rollup-sourcemap-path-transform";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import packageJson from "./package.json" with { type: "json" };

const name = packageJson.name;

const sourcemapPathTransform = createPathTransform({
	prefixes: { ".": `/${name}/` },
	requirePrefix: true,
});

export default defineConfig({
	build: {
		outDir: "dist",
		sourcemap: "inline",

		lib: { formats: ["es"], entry: "src/index.ts" },

		rollupOptions: {
			preserveEntrySignatures: "strict",
			output: {
				name,
				preserveModules: true,
				sourcemapPathTransform,
			},
		},
	},
	plugins: [dts()],
});
