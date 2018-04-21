const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const config = require('./config');


const webpackConfig = {
    entry: path.join(config.DIR_SRC, 'index.js'),
    output: {
        path: config.DIR_DIST,
        filename: 'bundle.js'
    },
    module: {
        rules: []
    },
    plugins: [],
    devServer: {
        contentBase: config.DIR_DIST
    }
}

// setup babel-loader
const babelConfig = {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: ['babel-loader']
}
webpackConfig.module.rules.push(babelConfig);

// setup html-webpack-plugin
const htmlWebpackPluginConfig = new HtmlWebPackPlugin({
    template: path.join(config.DIR_SRC, 'index.html'),
    filename: path.join(config.DIR_DIST, 'index.html'),
    inject: 'body'
})
webpackConfig.plugins.push(htmlWebpackPluginConfig);



module.exports = webpackConfig;