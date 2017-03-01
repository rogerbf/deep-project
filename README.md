# deep-project

Copy properties off of an object.

## usage

```javascript
const project = require(`deep-project`)

const captains = project(`
  {
    tos {
      captain
    }
    tng {
      captain
    }
  }
`)

const ships = {
  tos: {
    captain: `Kirk`,
    firstOfficer: `Spock`
  },
  tng: {
    captain: `Jean-Luc`,
    firstOfficer: `William`
  }
}

captains(ships)
// {
//   tos: {
//     captain: `Kirk`
//   },
//   tng: {
//     captain: `Jean-Luc`
//   }
// }
```
