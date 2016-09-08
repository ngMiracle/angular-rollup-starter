const { join } = require('path')
const { writeFileSync } = require('fs')
const UglifyJS = require('uglify-js')

;['main', 'vendors', 'polyfills'].forEach((bundle) => {
    const result = UglifyJS.minify(join(__dirname, `../tmp/${bundle}.bundle.js`))
    writeFileSync(join(__dirname, `../dist/${bundle}.bundle.js`), result.code)
})
