const deasync = require('deasync')

async function someFunctionAsync (callback) {
  setTimeout(() => {
    callback(null, 'Hello Word')
  }, 500)
}

const someFunctionSync = deasync(someFunctionAsync)

module.exports = {
  someFunctionSync
}