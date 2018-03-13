const ExtractTextPlugin       = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const path                    = require("path");
const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");
const webpack                 = require("webpack");

const PUBLIC_PATH             = "https://sheabels.ky/";

const plugins = [
    new ExtractTextPlugin({
        filename: "css/styles.css"
    }),
    new OptimizeCssAssetsPlugin({
        cssProcessorOptions: { discardComments: { removeAll: true } }
    })
];

module.exports = {
    entry: `${__dirname}/src/index.js`,
    output: {
        path: `${__dirname}/docs`,
        publicPath: "/",
        filename: "js/bundle.js",
    },
    devServer: {
        contentBase: path.join(__dirname, "docs"),
        historyApiFallback: true,
        open: true
    },
    devtool: "eval-source-map",
    module: {
        rules: [
            {
                test:    /\.js$/,
                exclude: /node_modules/,
                loader:  "babel-loader"
            },
            {
                test:   /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use:      "css-loader"
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use:      ["css-loader", "less-loader"]
                })
            },
            {
                test: /\.(woff|woff2|eot|ttf)$/,
                loader: "url-loader?limit=100000&name=./css/[hash].[ext]"
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    "file-loader?limit=100000&name=./img/[hash].[ext]",
                    "img-loader"
                ]
            },
            {
                test: /\.(ico|pdf)$/i,
                use: [
                    "file-loader?name=[name].[ext]"
                ]
            }
        ],
    },
    plugins: plugins
};
