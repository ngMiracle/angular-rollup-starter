const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const common = require('./webpack.common')

module.exports = merge(common, {
    entry: {
        polyfills: './src/polyfills',
        vendors: './src/vendors',
        main: './src/main',
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
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new ExtractTextPlugin('styles.css'),
    ],
})
