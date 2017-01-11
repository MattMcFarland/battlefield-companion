const request = require('request');

request('https://www.battlefield.com/login?postAuthUri=/companion', (error, response, body) => {
  console.log('done');
  console.log(error);
})
