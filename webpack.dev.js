const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack')
const path = require('path')

const bundleDir = './dist'
module.exports = merge(common, {
    mode: 'development',

    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        inline: true,
        hot: true,
        contentBase: path.join(__dirname, bundleDir),
        host: 'localhost',
        // port: 3000,
        publicPath: '/'
    },

    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
})