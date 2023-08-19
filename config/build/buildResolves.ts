import webpack from 'webpack'
import { BuildOprions } from './types/config'

export function buildResolvers(options: BuildOprions): webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js', '.json'],
        preferAbsolute: true,
        modules: [options.paths.src, 'public', 'node_modules'],
        mainFiles: ['index'],
        alias: {},
    }
}
