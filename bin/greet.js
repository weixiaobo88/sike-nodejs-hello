#!/usr/bin/env node
var parseArgs = require('minimist');
var greet = require('../index');

var argv = parseArgs(process.argv, {'boolean': true});
console.log(greet(process.argv[2], argv.drunk));



