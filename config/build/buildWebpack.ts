import webpack from "webpack";
import {buildDevServer} from "./buildDevServer";
import {buildLoaders} from "./buildLoaders";
import {buildPlugins} from "./buildPlugins";
import {buildResolvers} from "./buildResolvers";
import {BuildOptions} from "./types/types";

export function buildWebpack(options: BuildOptions): webpack.Configuration {
    const {mode, paths} = options;
    const isDev = mode === 'development';

    return {
        mode: mode ?? 'development', // mode = develop || prod
        entry: paths.entry, //entrypoint - путь до точки входа в наше приложение
        output: { // указывает то, куда происходит сборка
            path: paths.output,
            filename: '[name].[contenthash].js', // для filename можно использовать шаблоны, чтобы избежать кэширования в браузере
            clean: true,
        },
        plugins: buildPlugins(options),
        module: { // loaders, которые обрабатывают файлы с расширениями
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: isDev && 'inline-source-map',
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}