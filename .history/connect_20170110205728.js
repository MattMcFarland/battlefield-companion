const request = require('request');
const exec = require('child-process').exec

exec(['python', 'python/token.py', 'contact@mattmcfarland.com', '01242011aA'])
