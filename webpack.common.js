const path = require('path');
const DtsBundler = require('dts-bundle-webpack');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'simpleloader.js',
    path: path.join(__dirname, 'dist'),
    library: 'simpleloader',
    libraryTarget: 'umd',
    libraryExport: 'default',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
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
  target: 'node',
};
