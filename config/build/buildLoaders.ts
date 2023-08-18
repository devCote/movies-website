import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOprions } from "./types/config";

export function buildLoaders({ isDev }: BuildOprions): webpack.RuleSetRule[] {
    const typescript = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|ttf|otf|json)$/i,
        loader: "file-loader",
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    };
    const styleLoader = isDev ? "style-loader" : MiniCssExtractPlugin.loader;
    const cssLoader = {
        loader: "css-loader",
        options: {
            modules: {
                auto: (resPath: string) =>
                    Boolean(resPath.includes(".module.")),
                localIdentName: isDev
                    ? "[path][name]__[local]"
                    : "[hash:base64:8]",
            },
        },
    };

    const styles = {
        test: /\.s[ac]ss$/i,
        use: [styleLoader, cssLoader, "sass-loader"],
    };

    return [typescript, styles, svgLoader, fileLoader];
}
