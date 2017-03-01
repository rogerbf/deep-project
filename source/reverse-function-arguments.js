module.exports = (fn, ...args) => fn.apply(null, args.reverse())
