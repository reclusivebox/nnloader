const path = require('path');
const DtsBundler = require('dts-bundle-webpack');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'nnloader.js',
    path: path.join(__dirname, 'dist'),
    library: 'nnloader',
    libraryTarget: 'umd',
    libraryExport: '',
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
      name: 'nnloader',
      main: 'lib/index.d.ts',
      baseDir: 'dist',
      out: 'nnloader.d.ts',
    }),
  ],
  target: 'node',
};
