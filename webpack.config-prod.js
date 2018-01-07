const debug = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const VENDOR_LIBS = [
    'react', 'react-dom'
]

const resources = 'src/main/resources/'


module.exports = {
    entry: {
        bundle: './src/main/resources/js/index.js',
        vendor: VENDOR_LIBS
    },
    output: {
        path: path.resolve(__dirname, 'src/main/resources/public'),
        filename: '[name].[hash].js',
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
                loader: ExtractTextPlugin.extract(
                    'css-loader?modules&importLoaders=2&localIdentName=[name]__[local]___[hash:base64:5]'
                )
            }
        ]
    },

    devServer: {

    },

    devtool: '#eval-source-map',

    plugins: [
        new CleanWebpackPlugin('src/main/resources/public'),
        new ExtractTextPlugin('style.css'),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),
        new HtmlWebpackPlugin({
            template: 'src/main/resources/templates/index.html'
        })
    ]
};


if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#cheap-source-map';
    module.exports.plugins = (module.exports.plugins || module.plugins).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ]);
}