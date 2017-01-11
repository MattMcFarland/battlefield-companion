const request = require('request');
const getBFCToken = require('./lib/getBFCToken');
const uuid = require('uuid/v4');

getBFCToken((token) => {
  request.post({
    url: 'https://companion-api.battlefield.com/jsonrpc/web/api',
    json: {
      jsonrpc: '2.0',
      method: 'Stats.getCareerForOwnedGamesByPersonaId',
      params: {
        personaId: 1474247023
      },
      id: uuid()
    }
  }, (err, res, body) => {
    console.log(body);
  })
})
