const request = require('request');

request({
  url: 'https://www.battlefield.com/login?postAuthUri=/companion',
  maxRedirects: 1,
  followRedirect: (data) => {
    console.log(data)
    return false;
  }
}, (error, response, body) => {
  console.log('done');
  console.log(error);
})
