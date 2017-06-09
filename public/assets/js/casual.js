var lobby = {
  "server": '',
  "password": ''
}

var socket = io();

socket.on('lobby', function(data){
  lobby['server'] = data['server'];
  lobby['password'] = data['password'];

  $('#server').text(lobby['server']);
  $('#password').text(lobby['password']);

  console.log(lobby);
});
