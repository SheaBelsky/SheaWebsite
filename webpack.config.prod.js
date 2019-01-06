const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const path = require("path");
const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");
const webpack = require("webpack");

const PUBLIC_PATH = "https://sheabels.ky/";

const plugins = [
    new ExtractTextPlugin({
        filename: "css/styles.css",
    }),
    // new OptimizeCssAssetsPlugin({
    //     cssProcessorOptions: {
    //         discardComments: {
    //             removeAll: true,
    //         },
    //     },
    // }),
    new SWPrecacheWebpackPlugin({
        cacheId: "shea-belsky-website-1.2",
        dontCacheBustUrlsMatching: /\.\w{8}\./,
        filename: "js/service-worker.js",
        logger(message) {
            if (message.indexOf("Total precache size is") === 0) {
                // This message occurs for every build and is a bit too noisy.
                return;
            }
            if (message.indexOf("Skipping static resource") === 0) {
                // This message obscures real errors so we ignore it.
                // https://github.com/facebookincubator/create-react-app/issues/2612
                return;
            }
            console.log(message);
        },
        minify: true,
        // For unknown URLs, fallback to the index page
        navigateFallback: `${PUBLIC_PATH}/docs/index.html`,
        // Ignores URLs starting from /__ (useful for Firebase):
        // https://github.com/facebookincubator/create-react-app/issues/2237#issuecomment-302693219
        navigateFallbackWhitelist: [/^(?!\/__).*/],
        // Don't precache sourcemaps (they're large) and build asset manifest:
        staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
    }),
];

module.exports = {
    entry: path.join(__dirname, "src", "index.js"),
    output: {
        chunkFilename: path.join("js", "[name].bundle.js"),
        filename: path.join("js", "bundle.js"),
        path: path.join(__dirname, "docs"),
        publicPath: "/",
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    plugins: ["@babel/plugin-syntax-dynamic-import"],
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
                test: /\.(jpe?g|png|gif)$/i,
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
            {
                test: /\.svg$/,
                loader: "raw-loader",
            },
        ],
    },
    optimization: {
        minimize: true,
    },
    plugins,
};
