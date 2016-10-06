'use strict';

const webpack = require('webpack');
const path = require('path');
const helpers = require('./config/helpers');
const externels = require('webpack-node-externals');

module.exports = (settings) => ({
    entry: {
        'functions/hello': helpers.polyfill('./functions/hello/index.js')
    },
    output: {
        libraryTarget: 'commonjs',
        path: path.join(__dirname, '.webpack'),
        filename: '[name].js'
    },
    externals: [
        externels()
    ],
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/,
            },
            {
                test: /\.json$/,
                loader: 'json',
            },
        ]
    },
    plugins: [
        new webpack.DefinePlugin(settings),
        new webpack.IgnorePlugin(/\.(css|less)$/)
    ],
    node: {
        __dirname: true
    },
    target: 'node',
    devtool: 'source-map'
});