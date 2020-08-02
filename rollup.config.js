import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const name = 'fossilEngine';
const extensions = ['.js', '.ts'];

export default {
    input: './src/main.ts',
    output: [
        { file: pkg.main, format: 'cjs' },
        { file: pkg.module, format: 'es' },
        { file: pkg.browser, format: 'iife', name, globals: {} }
    ],
    plugins: [
        resolve({ extensions }),
        commonjs(),
        babel({ babelHelpers: 'bundled', extensions, include: ['src/**/*'] }),
        terser()
    ],
    external: []
};
