import project from './index'

test(`project is defined`, () => {
  expect(project).toBeDefined()
})

test(`expected output`, () => {
  const map = `
    {
      looking {
        for,
        answers
      }
    }
  `
  const source = {
    looking: {
      for: 47,
      answers: false,
      why: `who knows`
    },
    there: `we sow`
  }

  const filter = project(map)
  expect(typeof (filter)).toBe(`function`)
  expect(filter(source)).toEqual({ looking: { for: 47, answers: false } })
})
