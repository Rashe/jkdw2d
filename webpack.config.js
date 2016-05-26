module.exports = {
    entry: [
        __dirname + '/assets/react/filesys.js'
    ],
    output: {
        path: __dirname + '/public/js/',
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        port: 8973
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                }
            }
        ]
    }

};
