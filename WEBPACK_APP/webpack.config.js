const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //bundling
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[hash].bundle.js'
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