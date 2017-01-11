const request = require('request');
emitter.setMaxListeners(99)
request('https://www.battlefield.com/login?postAuthUri=/companion', function (error, response, body) {
  if (!error) {
    console.log(response)
  }
})
