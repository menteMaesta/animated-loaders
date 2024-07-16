import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import postcssImport from 'postcss-import';
import { dts } from 'rollup-plugin-dts';
import alias from '@rollup/plugin-alias';
import path from 'node:path';

// This is required to read package.json file when
// using Native ES modules in Node.js
// https://rollupjs.org/command-line-interface/#importing-package-json
import { createRequire } from 'node:module';
const requireFile = createRequire(import.meta.url);
const packageJson = requireFile('./package.json');

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      alias({
        entries: [
          { find: 'src', replacement: path.resolve('./src') },
          {
            find: 'shared',
            replacement: path.resolve('./src/shared'),
          },
        ],
      }),
      resolve({
        extensions: ['.ts', '.tsx'],
      }),
      commonjs(),
      terser(),
      typescript({
        exclude: [
          'node_modules',
          'dist',
          '**/*.stories.tsx',
          'src/shared/stories.css',
        ],
      }),
      postcss({
        extensions: ['.css'],
        plugins: [
          autoprefixer(),
          postcssImport({
            resolve: (id) => {
              const [aliasName, filename] = id.split('/');
              const aliasMapping = {
                src: (filename) => path.resolve(__dirname, `src/${filename}`),
                shared: (filename) =>
                  path.resolve(__dirname, `src/shared/${filename}`),
              };

              return aliasMapping[aliasName](filename);
            },
          }),
        ],
      }),
    ],
    external: ['react', 'react-dom'],
  },
  {
    input: 'dist/cjs/index.d.ts',
    output: [{ file: 'dist/cjs/index.d.ts', format: 'es' }],
    plugins: [
      alias({
        entries: [
          { find: 'src', replacement: path.resolve('./dist/cjs') },
          {
            find: 'shared',
            replacement: path.resolve('./dist/cjs/shared'),
          },
        ],
      }),
      dts(),
    ],
    external: [/\.css$/],
  },
];
