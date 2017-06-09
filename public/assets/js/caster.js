var caster = {
  "left": '',
  "right": ''
}

var socket = io();

socket.on('caster', function(data){
  caster['left'] = data['left'];
  caster['right'] = data['right'];

  $('.leftCaster').text(caster['left']);
  $('.rightCaster').text(caster['right']);

  console.log(caster);
});
