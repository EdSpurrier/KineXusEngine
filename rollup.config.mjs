import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import autoprefixer from 'autoprefixer';
import postcss from 'rollup-plugin-postcss';

export default [
  {
    input: './src/index.ts', // Ensure your entry file is a TypeScript file
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
        exports: 'named',
      }
    ],
    plugins: [
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react']
      }),
      external({
        includeDependencies: true
      }),
      resolve({
        extensions: ['.js', '.jsx', '.ts', '.tsx'] // Resolve all these extensions
      }),
      postcss({
        modules: true,
        plugins: [autoprefixer()],
      }),
      terser(),
      typescript({
        useTsconfigDeclarationDir: true,
      }),
    ]
  }
];
