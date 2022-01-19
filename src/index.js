const deasync = require('deasync')


function someFunctionSync () {
  return deasync(async (callback) => {
    try {

      setTimeout(() => {
        callback(null, 'Hello Word')
      }, 500)
    } catch (e) {
      callback(e)
    }
  })()
}




module.exports = {
  someFunctionSync
}


