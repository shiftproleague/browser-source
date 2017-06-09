var match = {
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

var socket = io();

socket.on('scoreboard', function(data){
  match['blue']['name'] = data['blue']['name'];
  match['blue']['score'] = data['blue']['score'];

  match['orange']['name'] = data['orange']['name'];
  match['orange']['score'] = data['orange']['score'];

  match['round'] = data['round'];
  match['bestOf'] = data['bestOf'];

  $('#blueName').text(match['blue']['name']);

  $('#orangeName').text(match['orange']['name']);

  $('#round').text(match['round']);
  $('#bestOf').text(match['bestOf']);

  imgPath = '/assets/img/'
  var score, bestOf;

  score = parseInt(match['blue']['score']);

  var html, path;
  html = '';
  path = '';
  for ( var i = 1; i <= score; i++ )
  {
    path = imgPath + 'Blue' + i + '.png'
    img = '<img class="overlay" src="' + path + '" />'
    html = html + img
  }
  $('#blueScore').html(html);

  score = parseInt(match['orange']['score']);

  html = '';
  path = '';
  for ( var i = 1; i <= score; i++ )
  {
    path = imgPath + 'Orange' + i + '.png'
    img = '<img class="overlay" src="' + path + '" />'
    html = html + img
  }
  $('#orangeScore').html(html);

  console.log(match);
});
