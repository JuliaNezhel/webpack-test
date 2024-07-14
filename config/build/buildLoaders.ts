import webpack from "webpack";

export const buildLoader = (): webpack.RuleSetRule[] => {

    const tsLoader = {
        test: /\.tsx?$/, // регулярка которая сообщает по каким файлам
        use: 'ts-loader',
        exclude: /node_modules/, // иключает файлы из указанной папки
    }
    const cssLoader =  {
            test: /\.s[ac]ss$/i,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader",
            ],
        }
    return [
        tsLoader, cssLoader
    ]
}
