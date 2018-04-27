const webpack = require('webpack');
const path = require('path');
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

// CSS setup
const cssConfig = {
    test: /\.css$/,
    exclude: /node_modules/,
    use: ['style-loader', 'css-loader']
}
webpackConfig.module.rules.push(cssConfig);

module.exports = webpackConfig;