'use strict';

const webpack = require('webpack');
const path = require('path');
const helpers = require('./config/helpers');

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
        'aws-sdk', // aws-sdk included in Lambda
    ],
    resolve: {
        // set root resolver to app directory.
        // this allows using absolute paths for imports starting from
        // the app folder instead of relative paths
        // ie import { } from dir/dir/dir vs
        // ie import { } from ../../../
        root: __dirname,
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
        new webpack.IgnorePlugin(/\.(css|less)$/),
        new webpack.optimize.UglifyJsPlugin()
    ],
    target: 'node',
    devtool: 'source-map'
});