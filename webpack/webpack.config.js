const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: 'src/client/index.html'
})

module.exports = {
    mode: 'development',
    entry: [
        './src/client/index.js'
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist/public'),
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
        htmlWebpackPlugin,
    ]
}