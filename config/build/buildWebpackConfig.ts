import {BuildOptions} from "./types/types";
import path from "path";
import {buildLoader} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildPlugins} from "./buildPlugins";
import webpack from "webpack";
import {buildDevServer} from "./buildDevServer";

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
    const {paths, mode, isDev} = options
    return {
        entry: paths.entry,
        mode: mode,
        output: {
            filename: '[contenthash].[name].js',
            path: paths.build,
            clean: true,
        },
        devtool: isDev ? 'inline-source-map' : undefined, // экран и красно что то написано еслиошибка, изначально в webpack
        module: {
            rules: buildLoader(),
        },
        devServer: isDev ? buildDevServer(options) : undefined, // добавляем проверку на в каком режиме будеиБ если дев то в банд не идет  указзые поля
        resolve: buildResolvers(),
        plugins: buildPlugins(paths),
    }
}
