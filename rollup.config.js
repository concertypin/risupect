import { sync } from "glob"
import { createPathTransform } from 'rollup-sourcemap-path-transform'
import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';
import packageJson from './package.json' with { type: 'json' };
const name = packageJson.name;


const sourcemapPathTransform = createPathTransform({
    prefixes: {
        '.': `/${name}/`,
    },
    requirePrefix: true,
})

/**
 * @type {import('rollup').OutputOptions}
 */
const outputLib = {
    format: 'es',
    name: name,
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
    input: sync("src/**/*.ts", { nodir: true }),
    output: [outputLib],
    plugins: [
        typescript({ tsconfig: './tsconfig.json' }),
        nodeResolve({ browser: true })
    ],
};
