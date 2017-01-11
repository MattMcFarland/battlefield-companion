const request = require('request');

request('https://www.battlefield.com/login?postAuthUri=/companion', function (error, response, body) {
  if (!error) {
    console.log(response)
  }
})
