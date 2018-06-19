const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const bundleDir = './dist'
const PRODUCTION = 'production';

module.exports = merge(common, {
    mode: PRODUCTION,

    output: {
        filename: '[name].[chunkhash].js'
    },

    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },

    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin([bundleDir]),

        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(PRODUCTION)
        }),
    ]
})


