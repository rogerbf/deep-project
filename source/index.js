const parse = require(`curly-notation-to-dotpath`)
const _pick = require(`lodash-pickdeep`)
const pick = require(`./reverse-function-arguments`).bind(null, _pick)

module.exports = mapping => pick.bind(null, parse(mapping))
