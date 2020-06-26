const path = require('path');
const DtsBundler = require('dts-bundle-webpack');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'simpleloader.js',
    path: path.join(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader'],
      },
    ],
  },
  plugins: [
    new DtsBundler({
      name: 'simpleloader',
      main: 'lib/index.d.ts',
      baseDir: 'dist',
      out: 'simpleloader.d.ts',
    }),
  ],
};
