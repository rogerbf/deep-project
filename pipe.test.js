const pipe = require(`./pipe`)

test(`pipe is a function`, () => {
  expect(typeof (pipe)).toBe(`function`)
})

test(`pipe`, () => {
  function upperCaser (str) {
    return str.toUpperCase()
  }

  function charCoder (str) {
    return (
      str
      .split(``)
      .map(character => character.charCodeAt(0))
      .join(``)
    )
  }

  expect(pipe(upperCaser, charCoder, `a`)).toEqual(`65`)
})
