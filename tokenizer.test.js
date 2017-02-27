const tokenizer = require(`./tokenizer`)

test(`tokenizer`, () => {
  const data = `
  {
    ncc1701 {
      captain
    }
  }
  `

  expect(tokenizer(data)).toEqual([
    { type: `open`, value: `{` },
    { type: `key`, value: `ncc1701` },
    { type: `open`, value: `{` },
    { type: `key`, value: `captain` },
    { type: `close`, value: `}` },
    { type: `close`, value: `}` }
  ])
})
