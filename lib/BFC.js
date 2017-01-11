const exec = require('child_process').exec;
const assert = require('assert');
const uuid = require('uuid/v4');
const request = require('request');
const API_URL = 'https://companion-api.battlefield.com/jsonrpc/web/api';

function getBFCToken(email, password, cb) {
  // this executs python and runs the token.py file passing in the given credentials
  exec(`python python/token.py ${email} ${password}`, (error, stdout, stderr) => {
    if (error) {
      cb(error)
    }
    const token = stdout.trim()
    cb(null, token)
  });
}

function BFC(email, password, done) {

  assert(email);
  assert(password);
  const id = uuid();

  getBFCToken(email, password, (err, token) => {
    if (err) return done(new Error(err));
    const headers = {
      'Content-Type': 'application/json',
      'Accept': '*/*',
      'X-GatewaySession': token
    }
    done(null, {
      getCareerForOwnedGamesByPersonaId: (personaId, cb) => {
         request.post({
          url: API_URL,
          headers,
          json: {
            id,
            jsonrpc: "2.0",
            method: 'Stats.getCareerForOwnedGamesByPersonaId',
            params: {
              personaId
            }
          }
        }, (err, res) => {
          if (err) {
            return cb(err);
          }
          return cb(null, res.toJSON().body);
        })
      },
      get: ({method, params}, cb) => {
        request.post({
          url: API_URL,
          headers,
          json: {
            jsonrpc: "2.0",
            id,
            method,
            params
          }
        }, (err, res) => {
          if (err) {
            return cb(err);
          }
          return cb(null, res.toJSON().body);
        })
      },
      token
    })
  })
}

module.exports = BFC;
