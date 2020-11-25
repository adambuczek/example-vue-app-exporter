const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ProvidePlugin = webpack.ProvidePlugin

const createConfiguration = (
    output,
    dataPath
) => ({
    mode: 'production',
    target: 'web',
    entry: './src/main.js',
    output: {
        path: output,
        filename: 'index.js',
        libraryTarget: 'umd'
    },
    resolve: {
        alias: {
            '@': path.join(__dirname, 'src')
        },
        modules: ['node_modules'],
        extensions: ['.js', '.vue', '.json', '.css']
    },
    externals: {
        vue: 'Vue'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            injectType: 'singletonStyleTag',
                            insert: '[data-style-root]'
                        }
                    },
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new ProvidePlugin({ __injected: dataPath }),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'template.html'),
            minify: {
                collapseWhitespace: false,
                removeComments: false
            },
            hash: true
        })
    ]
})

module.exports = createConfiguration

