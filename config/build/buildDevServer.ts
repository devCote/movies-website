import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import { BuildOptions } from './types/config'

export function buildDevServer({
    port,
    paths,
}: BuildOptions): DevServerConfiguration {
    return {
        port,
        open: false,
        static: paths.build,
        historyApiFallback: true,
    }
}
