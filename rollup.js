import rollup      from 'rollup'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs    from 'rollup-plugin-commonjs'
import uglify      from 'rollup-plugin-uglify'

export default {
    entry: 'dist/src/entry.js',
    dest: 'dist/bundle.js',
    sourceMap: false,
    format: 'iife',
    plugins: [
        nodeResolve({jsnext: true, module: true}),
        commonjs({
            include: [
                'node_modules/rxjs/**',
                'node_modules/core-js/**',
            ],
        }),
        uglify()
    ]
}
