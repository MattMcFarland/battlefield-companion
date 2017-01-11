const request = require('request');
const getBFCToken = require('./lib/getBFCToken');

getBFCToken((token) => {
  request.post({
    url: ''
  })
})
