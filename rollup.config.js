import { glob } from 'glob';
import { createPathTransform } from 'rollup-sourcemap-path-transform'
import typescript from '@rollup/plugin-typescript';
import packageJson from './package.json' with { type: 'json' };
const version = packageJson.version;
const name = packageJson.name;
const description = packageJson.description || 'No description available';


const sourcemapPathTransform = createPathTransform({
    prefixes: {
        '.': `/${name}/`,
    },
    requirePrefix: true,
})

/**
 * @type {import('rollup').OutputOptions}
 */
const outputStandalone = {
    format: 'es',
    name: name,
    validate: true,
    file: `dist/${name}_${version}.js`,
    sourcemap: "inline",
    sourcemapPathTransform: sourcemapPathTransform,
paths:{
"@risu": `risutype`   
}
};

/**
 * @type {import('rollup').OutputOptions}
 */
const outputLib = {
    format: 'es',   
    name: name,
    preserveModules: true,
    validate: true,
    dir:"dist",
    sourcemap: "inline",
    sourcemapPathTransform: sourcemapPathTransform,
};
/**
 * @type {import('rollup').RollupOptions}
 */
export default {
    //input: glob.sync('src/**/index.ts'),
    input:"src/index.ts",
    output: [outputStandalone],

    plugins: [
        typescript({ tsconfig: './tsconfig.json' }),
    ],
    external: [/@risu.*/]
};