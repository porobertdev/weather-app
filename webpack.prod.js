const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new CopyPlugin({
            patterns: [{ from: 'src/assets', to: 'assets' }],
        }),
    ],
});
