const constants = require('./constants');
const fs = require('fs-extra');

fs.copy([constants.server, 'server.js'].join('/'), [constants.dist, 'server.js'].join('/'))
  .then(function(){
    console.log('Done');
  })
  .catch(function(){
    console.log('Error');
  });
