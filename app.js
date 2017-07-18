var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

app.get('/caster', function(req, res){
  res.sendFile(__dirname + '/caster.html');
});

app.get('/pip', function(req, res){
  res.sendFile(__dirname + '/pip.html');
});

app.get('/scoreboard', function(req, res){
  res.sendFile(__dirname + '/scoreboard.html');
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/admin.html');
});


var caster = {
  'left': '',
  'right': ''
}

var lobby = {
  'server': '',
  'password': ''
}

var scoreboard = {
  'blue': {
    'name': '',
    'score': '0'
  },
  'orange': {
    'name': '',
    'score': '0'
  },
  'round': 'R1',
  'bestOf': '3'
}

io.on('connection', function(socket){
  io.emit('caster', caster);
  io.emit('lobby', lobby);
  io.emit('scoreboard', scoreboard);

  socket.on('caster', function(data) {
    caster['left'] = data['left'];
    caster['right'] = data['right'];

    io.emit('caster', caster);
  });

  socket.on('lobby', function(data) {
    lobby['server'] = data['server'];
    lobby['password'] = data['password'];

    console.log(lobby);
    io.emit('lobby', lobby);
  });

  socket.on('scoreboard', function(data){
    scoreboard['blue']['name'] = data['blue']['name'];
    scoreboard['blue']['score'] = data['blue']['score'];

    scoreboard['orange']['name'] = data['orange']['name'];
    scoreboard['orange']['score'] = data['orange']['score'];

    scoreboard['round'] = data['round'];
    scoreboard['bestOf'] = data['bestOf'];

    console.log(scoreboard);
    io.emit('scoreboard', scoreboard);
  });
});

var port = process.env.PORT || 3000;
http.listen(port, function(){
  console.log('https://localhost:' + port + '/');
});
