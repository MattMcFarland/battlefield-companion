const request = require('request');
const getBFCToken = require('./lib/getBFCToken');
const uuid = require('uuid/v4');

const email = 'contact@mattmcfarland.com';
const password = '01242011aA';

getBFCToken((email, password, token) => {
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
