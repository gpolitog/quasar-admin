const merge = require('webpack-merge');
const prodEnv = require('./prod.env');
const argv = require('yargs').argv;

const SERVER_URL = argv.SERVER_URL || 'http://localhost:1337';

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  SERVER_URL: `"${SERVER_URL}"`,
});
