const request = require('request');

request({
  url: 'https://www.battlefield.com/login?postAuthUri=/companion',
  maxRedirects: 5,
  followRedirect: (data) => {
    const location = data.toJSON().headers.location;
    if location.indexOf('sign')
    console.log(data.toJSON().headers.location)
    if ()
    return true;
  }
}, (error, response, body) => {
  console.log('done');
  console.log(error);
})
