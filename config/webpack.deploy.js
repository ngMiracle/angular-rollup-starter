const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    cache: true,
    devtool: 'module-source-map',
    entry: {
        polyfills: './src/polyfills-prod',
        vendors: './src/vendors-prod',
        main: './src/main-prod',
    },

    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
        chunkFilename: '[id].chunk.js',
    },
    module: {
        loaders: [
            {test: /\.ts$/, loader: 'awesome-typescript'},
            {test: /\.html/, loader: 'raw'},
            {test: /\.css$/, loader: 'to-string!css'},
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['polyfills', 'vendors', 'main'].reverse(),
            minChunks: Infinity
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
    ],

    resolve: {
        extensions: ['', '.js', '.ts', '.json']
    },

    devServer: {
        historyApiFallback: true,
        watchOptions: {aggregateTimeout: 300, poll: 1000},
    },

    node: {
        global: true,
        process: true,
        Buffer: false,
        crypto: 'empty',
        module: false,
        clearImmediate: false,
        setImmediate: false,
        clearTimeout: true,
        setTimeout: true,
    }
}
