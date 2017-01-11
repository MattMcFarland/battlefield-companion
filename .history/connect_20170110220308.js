const BFC = require('./lib/BFC');
const email = 'contact@mattmcfarland.com';
const password = '01242011aA';

const connect = BFC(email, password, (err, connect) => {
  if (err) {
    throw new Error(err);
  }
  connect.get({
    method: 'Stats.getCareerForOwnedGamesByDisplayName',
    params: {
      displayName: "Ravic"
    }
  }, (err, data) => {
    if (err) {
      throw new Error(err);
    }
    console.log(data);
  })
});

