var caster = {
  "left": '',
  "right": ''
}

var lobby = {
  "server": '',
  "password": ''
}

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

var feed = {
  'feed': ''
}

var socket = io();


socket.on('caster', function(data) {
  caster['left'] = data['left'];
  caster['right'] = data['right'];

  $('#left').val(caster['left']);
  $('#right').val(caster['right']);
});

$('#left').on('change', function() {
  caster['left'] = $('#left').val();
  socket.emit('caster', caster);
  console.log(caster);
});

$('#right').on('change', function() {
  caster['right'] = $('#right').val();
  socket.emit('caster', caster);
  console.log(caster);
});


socket.on('lobby', function(data) {
  lobby['server'] = data['server'];
  lobby['password'] = data['password'];

  $('#server').val(lobby['server']);
  $('#password').val(lobby['password']);
});

$('#server').on('change', function() {
  lobby['server'] = $('#server').val();
  socket.emit('lobby', lobby);
  console.log(lobby);
});

$('#password').on('change', function() {
  lobby['password'] = $('#password').val();
  socket.emit('lobby', lobby);
  console.log(lobby);
});


socket.on('scoreboard', function(data){
  match['blue']['name'] = data['blue']['name'];
  match['blue']['score'] = data['blue']['score'];

  match['orange']['name'] = data['orange']['name'];
  match['orange']['score'] = data['orange']['score'];

  match['round'] = data['round'];
  match['bestOf'] = data['bestOf'];

  console.log(match);

  $('#blue .name').val(match['blue']['name']);
  $('#blue .score').val(match['blue']['score']);

  $('#orange .name').val(match['orange']['name']);
  $('#orange .score').val(match['orange']['score']);

  $('#round').val(match['round']);
  $('#bestOf').val(match['bestOf']);
});

$('#blue .name').on('change', function() {
  match['blue']['name'] = $('#blue .name').val();
  socket.emit('scoreboard', match);
  console.log(match);
});

$('#blue .score').on('change', function() {
  match['blue']['score'] = $('#blue .score').val();
  socket.emit('scoreboard', match);
  console.log(match);
});

$('#orange .name').on('change', function() {
  match['orange']['name'] = $('#orange .name').val();
  socket.emit('scoreboard', match);
  console.log(match);
});

$('#orange .score').on('change', function() {
  match['orange']['score'] = $('#orange .score').val();
  socket.emit('scoreboard', match);
  console.log(match);
});

$('#round').on('change', function(){
  match['round'] = $('#round').val();
  socket.emit('scoreboard', match);
  console.log(match);
});

$('#bestOf').on('change', function(){
  match['bestOf'] = $('#bestOf').val();
  socket.emit('scoreboard', match);
  console.log(match);
});


// https://css-tricks.com/scaled-proportional-blocks-with-css-and-javascript/
// Aspect-ratio scaling
var $el = $(".overlay");
var elHeight = $el.outerHeight();
var elWidth = $el.outerWidth();

var $wrapper = $(".wrapper");

$wrapper.resizable({
  resize: doResize
});

function doResize(event, ui) {

  var scale, origin;

  scale = Math.min(
    ui.size.width / elWidth,
    ui.size.height / elHeight
  );

  $el.css({
    transform: "scale(" + scale + ")"
  });

}

var starterData = {
  size: {
    width: $wrapper.width(),
    height: $wrapper.height()
  }
}
doResize(null, starterData);
