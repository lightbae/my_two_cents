var express = require('express');
var server = express();
var mongoose = require('mongoose');
var postRouter = require('./server/routers/post.router.js');
var bodyParser = require('body-parser');

var port = process.env.PORT || 8080;
var mongoURI = process.env.MONGOURI || require('./config.js').mongoURI;

server.use(express.static(__dirname + '/public'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

mongoose.connect(mongoURI); //establish the connection to the mongo nosql db

server.get('/', function(req, res){
  res.sendFile('public/html/index.html', {root:__dirname});
});
server.use(postRouter); //plugs router in

server.listen(port, function(){
  console.log('Now listening on port...', port);
});
