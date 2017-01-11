const BFC = require('./lib/BFC');
const email = 'contact@mattmcfarland.com';
const password = '01242011aA';

const connect = BFC(email, password);

connect.get({

  method: 'Stats.getCareerForOwnedGamesByPersonaId',

})
