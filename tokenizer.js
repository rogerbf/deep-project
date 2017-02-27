module.exports = input =>
  input.split(/\s/g)
  .filter(element => element.length > 0)
  .map(value => {
    switch (value) {
      case `{`:
        return { value, type: `open` }
      case `}`:
        return { value, type: `close` }
      default:
        return { value, type: `key` }
    }
  })
