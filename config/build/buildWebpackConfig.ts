import webpack from "webpack";
import { BuildOprions } from "./types/config";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolves";
import { buildPlugins } from "./buildPlugins";
import 'webpack-dev-server'
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOprions ): webpack.Configuration {

  const {paths, mode, isDev} = options

  return {
    mode,
    entry: paths.entry,
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
    output: {
      filename: '[name].[contenthash:8].js',
      path: paths.build, 
      clean: true,
    },
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolvers(),
    plugins: buildPlugins(options),
  }
}
