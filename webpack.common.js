const path = require('path');
const webpack = require('webpack')
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const bundleDir = './dist'


module.exports = {

    entry: {
        app: './src/client/app.js'
    },
    output: {
        path: path.resolve(__dirname, bundleDir),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }]

            },
            {
                test: /\.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
                use: {
                    loader: 'file-loader?name=fonts/[name].[ext]',
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: 'file-loader?name=images/[name].[ext]',
                }
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/template/index.html'
        }),
    ]

}