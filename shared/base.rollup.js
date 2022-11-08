import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

export function getBaseConfig(main, module) {
    return [
        {
            input: 'src/index.tsx',
            output: [
                {
                    file: main,
                    format: 'cjs',
                },
                {
                    file: module,
                    format: 'esm',
                },
            ],
            plugins: [
                resolve(),
                commonjs(),
                peerDepsExternal('./package.json'),
                typescript({ tsconfig: './tsconfig.json' }),
            ],
        },
        {
            input: 'dist/esm/index.d.ts',
            output: [{ file: 'dist/index.d.ts', format: 'esm' }],
            plugins: [dts.default()],
        },
    ];
}
