import path from 'path';

import alias from '@rollup/plugin-alias';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import analyze from 'rollup-plugin-analyzer';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

// Used for generating external dependencies
// Credit: Mateusz Burzyński (@Andarist)
// Source: https://github.com/rollup/rollup-plugin-babel/issues/148#issuecomment-399696316
const makeExternalPredicate = (externalArr) => {
  if (externalArr.length === 0) {
    return () => false;
  }
  const pattern = new RegExp(`^(${externalArr.join('|')})($|/)`);
  return (id) => pattern.test(id);
};

const babelRuntimeVersion = pkg.dependencies['@babel/runtime'].replace(/^[^0-9]*/, '');

const outputOptions = {
  exports: 'named',
  preserveModules: true,
  banner: `/*
 * Rollup Library Starter
 * https://github.com/mryechkin/rollup-library-starter
 * (c) Mykhaylo Ryechkin (@mryechkin)
 */`,
};

const config = {
  input: 'src/index.js',
  output: [
    {
      dir: 'dist/esm',
      format: 'esm',
      ...outputOptions,
    },
    {
      dir: 'dist/cjs',
      format: 'cjs',
      ...outputOptions,
    },
  ],
  external: makeExternalPredicate([
    // Handles both dependencies and peer dependencies so we don't have to manually maintain a list
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ]),
  plugins: [
    alias({
      entries: {
        src: path.resolve(path.resolve(__dirname), 'src'),
      },
    }),
    nodeResolve(),
    commonjs({ include: ['node_modules/**'] }),
    babel({
      babelHelpers: 'runtime',
      exclude: /node_modules/,
      plugins: [['@babel/plugin-transform-runtime', { version: babelRuntimeVersion }]],
      presets: [
        ['@babel/preset-env', { targets: 'defaults' }],
        ['@babel/preset-react', { runtime: 'automatic' }],
      ],
    }),
    terser(),
    analyze({
      hideDeps: true,
      limit: 0,
      summaryOnly: true,
    }),
  ],
};

export default config;
