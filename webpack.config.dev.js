const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

const PUBLIC_PATH = "https://sheabels.ky/";

const plugins = [
    new ExtractTextPlugin({
        filename: path.join("css", "styles.css"),
    }),
    new OptimizeCssAssetsPlugin({
        cssProcessorOptions: { discardComments: { removeAll: true } },
    }),
];

module.exports = {
    entry: path.join(__dirname, "src", "index.js"),
    output: {
        path: path.join(__dirname, "docs"),
        publicPath: "/",
        filename: path.join("js", "bundle.js"),
    },
    devServer: {
        contentBase: path.join(__dirname, "docs"),
        historyApiFallback: true,
        port: 3000,
    },
    devtool: "eval-source-map",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                },
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader",
                }),
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "less-loader"],
                }),
            },
            {
                test: /\.(woff|woff2|eot|ttf)$/,
                use: [
                    {
                        loader: "url-loader?limit=100000",
                        options: {
                            name: "css/[hash].[ext]",
                        },
                    },
                ],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    {
                        loader: "file-loader?limit=100000",
                        options: {
                            name: "img/[hash].[ext]",
                        },
                    },
                    "img-loader",
                ],
            },
            {
                test: /\.(ico|pdf)$/i,
                use: [
                    {
                        loader: "file-loader?limit=100000",
                        options: {
                            name: "img/[name].[ext]",
                        },
                    },
                ],
            },
        ],
    },
    plugins,
};
