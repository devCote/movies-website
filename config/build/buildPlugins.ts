import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import { BuildOprions } from './types/config'

export function buildPlugins({
    paths,
    isDev,
}: BuildOprions): webpack.WebpackPluginInstance[] {
    const progressPlugin = new webpack.ProgressPlugin()
    const htmlPlugin = new HtmlWebpackPlugin({
        template: paths.html,
        favicon: paths.favicon,
    })
    const miniCssPlugin = new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
    })
    const definePlugin = new webpack.DefinePlugin({
        __IS_DEV__: JSON.stringify(isDev),
    })
    const copyPlugin = new CopyWebpackPlugin({
        patterns: [{ from: 'public/locales/', to: 'locales' }],
    })
    // const hotReloadPlugin = new webpack.HotModuleReplacementPlugin()
    // const bundleAnalyzer = new BundleAnalyzerPlugin({openAnalyzer:false});

    const plugins = [
        progressPlugin,
        htmlPlugin,
        miniCssPlugin,
        definePlugin,
        copyPlugin,
        // bundleAnalyzer,
    ]

    // if (isDev) plugins.push(hotReloadPlugin)

    return plugins
}
