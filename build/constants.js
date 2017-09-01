const path = require('path');

const root = path.dirname(__dirname);
const dist = [root, 'dist'].join('/');
const client = [root, 'src', 'client'].join('/');
const server = [root, 'src', 'server'].join('/');

module.exports = {
  root,
  dist, 
  client,
  server
}