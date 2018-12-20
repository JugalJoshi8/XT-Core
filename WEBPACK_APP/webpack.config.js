const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //bundling
    entry: {
        index: './src/index.js',
        vendor: './src/vendor.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].bundle.js'
    },
    mode: 'development',
    //loaders
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    //plugins
    plugins: [new HtmlWebpackPlugin({
        'title': 'WebPack Application'
    })]
}