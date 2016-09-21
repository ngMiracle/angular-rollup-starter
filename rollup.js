import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs    from 'rollup-plugin-commonjs'
import uglify      from 'rollup-plugin-uglify'
import * as closure from 'google-closure-compiler-js'

function closureCompilerPlugin(options = {}){
    return {
        transformBundle(bundle){
            const compilation = Object.assign({}, options, {
                jsCode: options.jsCode ? options.jsCode.concat({ src: bundle }) : [{ src: bundle }]
            });
            console.log('closure compiler optimizing...');
            const transformed = closure.compile(compilation);
            console.log('closure compiler optimizing complete');
            return { code: transformed.compiledCode, map: transformed.sourceMap };
        }
    }
}

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
        closureCompilerPlugin({ compilationLevel: 'SIMPLE' }),
        uglify(),
    ]
}
