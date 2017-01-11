const request = require('request');

function getLoginURL(cb) {
  request({
    url: 'https://www.battlefield.com/login?postAuthUri=/companion',
    maxRedirects: 5,
    followRedirect: (data) => {
      const location = data.toJSON().headers.location;
      return (location.indexOf('https://signin.ea.com/p/web/login?execution=e279826723s1') === -1)
    }
  }, (error, response, body) => {
    if (!error) cb(response.toJSON().headers.location)
  })
}

getLoginURL((loginURL) => {
  request({
    method: 'POST',
    url: loginURL,
    form: {

    }
  })
})
