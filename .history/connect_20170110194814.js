const request = require('request');

request('https://www.battlefield.com/login?postAuthUri=/companion', (error, response, body) => {
  if (!error) {
    console.log(response)
  }
})
