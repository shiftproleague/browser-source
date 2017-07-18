var match = {
  'blue': {
    'name': '',
    'score': '0'
  },
  'orange': {
    'name': '',
    'score': '0'
  },
  'bestOf': '3'
}

var socket = io();

socket.on('scoreboard', function(data){
  match['blue']['name'] = data['blue']['name'];
  match['blue']['score'] = data['blue']['score'];

  match['orange']['name'] = data['orange']['name'];
  match['orange']['score'] = data['orange']['score'];

  match['bestOf'] = data['bestOf'];

  $('#blueName').text(match['blue']['name']);

  $('#orangeName').text(match['orange']['name']);

  $('#bestOf').text(match['bestOf']);

  $('#blueScore').text(match['blue']['score']);
  $('#orangeScore').text(match['orange']['score']);

  console.log(match);
});
