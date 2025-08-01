import webpack, {Configuration} from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/types";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export function buildPlugins({mode, paths, analyzer}: BuildOptions): Configuration['plugins'] {
    const isDev = mode === 'development';
    const isProd = mode === 'production';

    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({template: paths.html}), // подставляет скрипты, которые получаются в результате сборки, в index.html
    ]

    if (isDev) {
        plugins.push(new webpack.ProgressPlugin()) // показывает в % на сколько прошла сборка
    }

    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }))
    }

    if (analyzer) {
        plugins.push(new BundleAnalyzerPlugin())
    }

    return plugins;
}