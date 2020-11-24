const path = require('path');
const webpack = require('webpack');

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
        libraryTarger: 'umd'
    },
    resolve: {
        alias: {
            '@': path.join(__dirname, 'src')
        },
        modules: ['node_modules'],
        extensions: ['.js', '.vue', '.json', '.css']
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
                        loader: 'babel-loader',
                        options: {
                            injectType: 'singletonStyleTag',
                            insert: '[data-style-root]'
                        }
                    },
                    'css-loader'
                ]
            }
        ]
    }
})
