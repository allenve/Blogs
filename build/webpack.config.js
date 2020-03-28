/**
 * @file webpack.config.js 
 *
 * @author allenve(allenve.fe@gmail.com)
 * @created: 2020/03/21
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resolve = dir => path.join(__dirname, '..', dir);

module.exports = {
    mode: 'none',
    entry: path.join(__dirname, './../', 'src/index.tsx'),
    output: {
        filename: '[name].js',
        path: path.join(__dirname, './../', 'dist'),
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"],
        alias: {
            '@types': resolve('src/types.ts')
        }
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                loader: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.md$/,
                use: "raw-loader"
            },
        ]
    },

    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
};
