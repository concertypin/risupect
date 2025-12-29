declare module "rollup-sourcemap-path-transform" {
	export function createPathTransform(options: {
		/**
		 * Map of path prefixes to path replacements.
		 * The prefixes will be searched in the declared order and as soon as the first will match the beginning of the source path,
		 * it will be replaced with the value in the map tuple.
		 * If a prefix start with an asterisk (*) it will be search anywhere in the source path.
		 * @default {}
		 */
		prefixes?: Record<string, string>;
		/**
		 * If enabled and no prefix is detected in a source path, the transformation will fail by throwing an error.
		 * @default false
		 */
		requirePrefix?: boolean;
	}): (sourcePath: string) => string;
}
