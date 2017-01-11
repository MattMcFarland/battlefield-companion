const request = require('request');
const getBFCToken = require('./lib/getBFCToken');

getBFCToken((token) => {
  request.post({
    url: 'https://companion-api.battlefield.com/jsonrpc/web/api',
    json: {
      jsonrpc: '2.0',
      method: 'Stats.getCareerForOwnedGamesByPersonaId'
    }
  })
})
