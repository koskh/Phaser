const path = require('path');

module.exports = {
    entry : {
        app: './src/main.ts',
    },
    output : {
        filename : 'main.js',
        path : path.resolve(__dirname, 'dist'),
    },
    mode : 'development',
    devtool : 'inline-source-map',

    devServer : {
        static : './src'
    },

    resolve: {
        extensions: [ '.ts', '.tsx', '.js' ]
    },

    // loader to handle TypeScript file type
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    }
};
