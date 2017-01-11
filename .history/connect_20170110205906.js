const request = require('request');
const exec = require('child-process').exec;

exec(`python python/token.py ${email} ${password}`);

