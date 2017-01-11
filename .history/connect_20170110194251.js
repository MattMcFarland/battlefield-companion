const unirest = require('unirest');

unirest.get('https://www.battlefield.com/login?postAuthUri=/companion')
  .end(function (response) {
    console.log(response.url)
  })
