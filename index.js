var minimist = require('minimist');

var args = process.argv.splice(process.execArgv.length + 2);
module.exports = minimist(args);