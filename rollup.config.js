import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default [
  getBundlerTsConfig(),
  getBundlerCdnConfig(),
]

function getBundlerTsConfig() {
  return {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
      }),
      nodeResolve(),
    ],
    treeshake: {
      moduleSideEffects: false,
    },
  }
}

function getBundlerCdnConfig() {
  const globalWindowName = 'TsTmplLibrary';
  const fileName = 'ts-tmpl-library';

  return {
    input: 'dist/index.js',
    output: [
      {
        file: `dist/${fileName}.iife.js`,
        format: 'iife',
        name: globalWindowName,
        sourcemap: true,
      }
    ],
    plugins: [
      terser(),
      nodeResolve(),
    ],
    treeshake: {
      moduleSideEffects: false,
    },
  }
}