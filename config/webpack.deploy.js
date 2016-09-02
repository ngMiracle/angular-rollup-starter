const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

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
            {
                test: /\.component\.ts$/,
                loader: 'awesome-typescript!angular2-template'
            },
            {
                test: /\.ts$/,
                exclude: [/\.component\.ts/],
                loader: 'awesome-typescript'
            },
            {
                test: /\.component\.html$/,
                loader: 'raw'
            },
            {
                test: /\.component\.css$/,
                loader: 'to-string!css'
            },
            {
                test: /\.css$/,
                exclude: [/\.component\.css$/],
                loader: ExtractTextPlugin.extract({fallbackLoader: 'style', loader: 'css'})
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url?limit=10000'
            }
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
        extensions: ['', '.ts', '.js', '.json']
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
