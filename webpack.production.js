const merge = require('webpack-merge');
const main = require('./webpack.common');

module.exports = merge(main,
    {mode: 'production'});
