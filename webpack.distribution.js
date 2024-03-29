const path = require('path');

const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/main.ts',
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },

    // we are in production mode
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false
        }),

        new CopyPlugin({
            patterns: [
                {
                    // src/index.html
                    from: 'index.html',
                    context: 'src/'
                },
                {
                    // every file inside src/assets folder
                    from: 'assets/*',
                    context: 'src/'
                }
            ]
        })
    ],

    resolve: {
        extensions: [ '.ts', '.tsx', '.js' ]
    },

    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    }
};
