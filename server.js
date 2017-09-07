const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./config/webpack.dev.js')
const constants = require('./constants.js');

let app = express();
let server = http.createServer(app);
let io = require('socket.io')(server);
let port = process.env.PORT || 2403;
let isDev = process.env.NODE_ENV !== 'production';

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes
app.post('/event', function(req, res){
  if(req && req.body && req.body.payload) io.sockets.emit('gitEvent', JSON.parse(req.body.payload));
  res.sendStatus(200);
});

// development env
if(isDev){
  let compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, { 
    publicPath: config.output.publicPath,
    stats: {
      colors: true
    }
  }));
}
// production env
else {
  app.use(express.static(constants.public));
  app.get("/", (req, res) => res.sendFile([constants.public, 'index.html'].join('/')));
}

// start server
server.listen(port, function(){
  console.log(`Started on http://localhost:${port}`)
});

