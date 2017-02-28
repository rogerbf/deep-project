const tokenizer = require(`./tokenizer`)
const parser = require(`./parser`)
const _pick = require(`lodash-pickdeep`)
const pick = require(`./reverse-argument-order`).bind(null, _pick)
const pipe = require(`./pipe`)

module.exports = schema => pick.bind(null, pipe(tokenizer, parser, schema))