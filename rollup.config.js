import { createPathTransform } from "rollup-sourcemap-path-transform";
import typescript from "@rollup/plugin-typescript";

const sourcemapPathTransform = createPathTransform({
  prefixes: {
    ".": `/risupect/`,
  },
  requirePrefix: true,
});

/**
 * @type {import('rollup').OutputOptions}
 */
const outputLib = {
  format: "es",
  name: "risupect",
  preserveModules: true,
  validate: true,
  dir: "dist",
  sourcemap: "inline",
  sourcemapPathTransform: sourcemapPathTransform,
};
/**
 * @type {import('rollup').RollupOptions}
 */
export default {
  input: "src/index.ts",
  output: [outputLib],

  plugins: [typescript({ tsconfig: "./tsconfig.json" })],
  external: [/@risu.*/],
};
