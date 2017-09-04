const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

let app = express();
let server = http.createServer(app);
let io = require('socket.io')(server);
let port = process.env.PORT || 2403;



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html')
});

app.post('/test', function(req, res){
  if(req && req.body && req.body.payload) io.sockets.emit('gitEvent', JSON.parse(req.body.payload));
  res.sendStatus(200);
});

app.use(express.static(__dirname));

server.listen(port, function(){
  console.log(`http://localhost:${port}`)
});

