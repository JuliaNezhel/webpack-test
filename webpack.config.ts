import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildEnv, BuildMode, BuildPaths} from "./config/build/types/types";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";

export default (env: BuildEnv) => {
    const mode: BuildMode = env.mode || 'development';
    const isDev = mode === 'development';

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'dist'),
        html: path.resolve(__dirname, 'public', 'index.html'),
    }
    const PORT = env.port || 3000;

    return  buildWebpackConfig({
        isDev,
        paths,
        mode,
        port: PORT
    })
};
