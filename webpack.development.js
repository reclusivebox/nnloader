const merge = require('webpack-merge');
const main = require('./webpack.common');

module.exports = merge(main,
    {mode: 'development', devtool: 'inline-source-map'});

