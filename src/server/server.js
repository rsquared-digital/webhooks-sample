const http = require('http');
const express = require('express')
const app = express();
const server = http.createServer(app);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html')
})

app.use(express.static(__dirname));

server.listen(process.env.PORT || 8080, function(){
  console.log('started');
})