function play(idPlayer, control) {

  var player = document.querySelector('#' + idPlayer);

  if(player.paused){
    player.play();
    control.textContent = 'pause';
  }
  else{
    player.pause();
    control.textContent = 'play';
  }
}

function resume(idPlayer) {
  
    var player = document.querySelector('#' + idPlayer);

    player.currentTime = 0;
    player.pause();
}
