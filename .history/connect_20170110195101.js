const request = require('request');

request({
  url: 'https://www.battlefield.com/login?postAuthUri=/companion',
  maxRedirects: 1
}, (error, response, body) => {
  console.log('done');
  console.log(error);
})
