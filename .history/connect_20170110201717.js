const request = require('request').defaults({ jar: true });
const jar = request.jar();
function getLoginURL(cb) {
  request({
    jar,
    url: 'https://www.battlefield.com/login?postAuthUri=/companion',
    maxRedirects: 5,
    followRedirect: (data) => {
      const location = data.toJSON().headers.location;
      return (location.indexOf('https://signin.ea.com/p/web/login?execution') === -1)
    },
    forever: true
  }, (error, response, body) => {
    if (error) {
      throw new Error(error);
    }
    if (!error) cb(response.toJSON().headers)
  })
}

getLoginURL((headers) => {
  var cookies = jar.getCookies(headers.location);
  console.log(cookies);
  request({
    jar,
    headers,
    method: 'POST',
    url: headers.location,
    form: {
      '_eventId': 'submit',
      'password': '01242011aA',
      'email': 'contact@mattmcfarland.com'
    }
  }, (error, response, body) => {
    request({
      jar,
      url: 'https://accounts.ea.com/connect/auth?client_id=sparta-companion-web&response_type=code&prompt=none&redirect_uri=nucleus:rest'
    }, (error, response, body) => {
      console.log(response.toJSON().body)
    })
  })
})
