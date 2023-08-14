import path from 'path'
import webpack from 'webpack'

import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BuildOprions } from './types/config'


export function buildPlugins({paths}: BuildOprions): webpack.WebpackPluginInstance[] {

  const progressPlugin = new webpack.ProgressPlugin()

  const htmlPlugin = new HtmlWebpackPlugin({
      template: paths.html,
      favicon: paths.favicon,
    })

  const miniCssPlugin = new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].css'
  })

  return [
    progressPlugin,
    htmlPlugin,
    miniCssPlugin
  ]
  
}
