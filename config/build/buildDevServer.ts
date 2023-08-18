import { BuildOprions } from "./types/config";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer({
    port,
    paths,
}: BuildOprions): DevServerConfiguration {
    return {
        port,
        open: false,
        static: paths.build,
        historyApiFallback: true,
    };
}
