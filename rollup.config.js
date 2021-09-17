import typescript from 'rollup-plugin-typescript2';
import externals from 'rollup-plugin-node-externals';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'cjs',
    exports: 'auto',
  },
  plugins: [
    typescript({tsconfigOverride: {
      compilerOptions: {module: 'ESNext'},
    }}),
    externals({deps: true}),
  ],
};
