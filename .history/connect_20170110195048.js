const request = require('request');

request({
  url: 'https://www.battlefield.com/login?postAuthUri=/companion',
  maxRedirects: 5
}, (error, response, body) => {
  console.log('done');
  console.log(error);
})
