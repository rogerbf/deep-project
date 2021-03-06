const reverse = require(`./reverse-function-arguments`)

test(`reversing arguments`, () => {
  const fn = jest.fn((a, b) => a + b)
  const reversed = reverse.bind(null, fn)
  expect(reversed(`A`, `B`)).toEqual(`BA`)
})
