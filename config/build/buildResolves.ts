import webpack from 'webpack'
import { BuildOptions } from './types/config'

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js', '.json'],
        preferAbsolute: true,
        modules: [options.paths.src, 'public', 'node_modules'],
        mainFiles: ['index'],
        alias: {},
    }
}
