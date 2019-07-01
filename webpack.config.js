require('babel-loader');

function createConfig(target) {
    return {
        entry: {
            legofy: ['./src/core.js']
        },
        output: {
            path: __dirname + '/dist',
            filename: `[name].${target}.js`,
            library: 'legofy',
            libraryTarget: target
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015', 'stage-0']
                    }
                }
            ]
        }
    };
}

module.exports = [
    createConfig('amd'),
    createConfig('commonjs2')
];
