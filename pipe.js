module.exports = (...args) =>
  args
  .slice(0, -1)
  .reduce((results, operation) => operation(results), args.slice(-1).pop())
