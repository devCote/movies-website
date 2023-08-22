import webpack from 'webpack'
import { BuildOptions } from './types/config'
import { buildCssLoader } from './loaders/BuildCssloader'

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const typescript = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif|ttf|otf|json)$/i,
        loader: 'file-loader',
    }

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const cssLoader = buildCssLoader(isDev)

    return [typescript, svgLoader, fileLoader, cssLoader]
}
