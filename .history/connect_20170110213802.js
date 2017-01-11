const BFC = require('./lib/BFC');
const email = 'contact@mattmcfarland.com';
const password = '01242011aA';

const connect = BFC(email, password, (err, connect) => {
  if (err) {
    throw err
  }
  connect.get({
    method: 'Stats.getCareerForOwnedGamesByPersonaId',
    params: {
      personaId: 1474247023
    }
  })
});

