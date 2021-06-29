const {resolve} = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const OptimezeCssAssetsWebpackPlugin = require("optimeze-css-assets-webpack-plugin");
module.exports = {
    entry: {
        index : "./src/index.js",
        public : "./src/public.js"
    },
    output: {
        filename: "[name].js",
        path:resolve(__dirname,"build")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use:[MiniCssExtractPlugin.loader,"css-loader","postcss-loader"]
            },
            {
                test: /\.(jpg|jpeg|png|gif)$/,
                loader: "url-loader",
                options: {
                    publicPath:'./images/',
                    outputPath:'images/',
                    limit: 1024 * 5,
                    esModule: false,
                    name:'[name][hash:10].[ext]'
                }
            },
            {
                test: /\.html$/,
                loader:"html-url-loader",
            },
            {
                exclude: /\.(js|json|css|lass|scss|html|png|jpg|jpeg|gif)/,
                loader: "file-loader",
                options: {
                    outputPath: "font/",
                    publicPath: "./font/",
                    name: '[name][hash].[ext]'
                }
            }
        ]
    },
    target: "web",
    devServer: {
        contentBase: resolve(__dirname,"build"),
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        }),
        new HtmlWebpackPlugin({
            template: "./src/project.html",
            filename: "project.html"
        }),
        new MiniCssExtractPlugin({
            filename: "style.css"

        })
        //压缩css
        // new OptimezeCssAssetsWebpackPlugin()
    ],
    mode : "production"
}