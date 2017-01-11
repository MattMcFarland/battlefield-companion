const BFC = require('./lib/BFC');
const email = 'contact@mattmcfarland.com';
const password = '01242011aA';

const connect = BFC(email, password, (err, api) => {
  if (err) {
    throw new Error(err);
  }
  api.get({
    method: 'Stats.getCareerForOwnedGamesByPersonaId',
    params: {
      personaId: 1474247023
    }
  }, (err, data) => {
    if (err) {
      throw new Error(err);
    }
    console.log(data);
  })
  api.getCareerForOwnedGamesByPersonaId(1474247023, (error, result) => {
    if (!error) {
      console.log(result);
    }
  })
});

