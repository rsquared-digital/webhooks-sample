const path = require('path');

const root = path.dirname(__dirname);
const dist = [root, 'dist'].join('/');

module.exports = {
  root,
  dist 
}