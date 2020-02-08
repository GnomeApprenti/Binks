function play(idPlayer) {

  let player = document.querySelector('#' + idPlayer);

  if(player.paused){
    player.play();
  }
  else{
    player.pause();
  }
}

function resume(idPlayer) {

    let player = document.querySelector('#' + idPlayer);

    player.currentTime = 0;
    player.pause();
}

document.addEventListener('play', function(e){
    let audios = document.getElementsByTagName('audio');
    for(let i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){audios[i].pause();}}}, true);

function update(player) {

  let barre = player.parentNode;
      duree = player.duration;
      temps = player.currentTime;
      fraction = temps/duree;
      pourcentage = fraction*100;

  barre.style.width = pourcentage + '%';

  timer = document.getElementById('progression');

  let mins = Math.floor(player.currentTime / 60);
      secs = Math.floor(player.currentTime % 60);
  if (secs < 10) {
      secs = '0' + String(secs);
  }
  timer.innerHTML = mins + ':' + secs;
}

function boutonP(idPlayer){
  let player = document.querySelector('#' + idPlayer);
  player.currentTime += 10.0;
}

function boutonM(idPlayer){
  let player = document.querySelector('#' + idPlayer);
  player.currentTime -= 10.0;
}

    /*
function positionSouris(event) {
    return {
        x: event.pageX,
        y: event.pageY
    };
}

function positionBarre(element){
    var top = 0, left = 0;

    do {
        top  += element.offsetTop;
        left += element.offsetLeft;
    } while (element = element.offsetParent);

    return { x: left, y: top };
}

function clickBarre(idPlayer, progression, event) {

    let player = document.querySelector('#' + idPlayer);
        barre = progression.childNodes[2];
        click = positionSouris(event);
        progress = positionBarre(progression);
        temps = player.currentTime;
        click = click.x - progress.x;
        pourcentage = Math.ceil((click/progression.offsetWidth)*100);
        duration = player.duration;

    temps = (duration*pourcentage)/100;

    console.log("progression = ", progress);
    console.log("click = ", click)
    console.log('duration = ', duration);
    console.log("pourcentage = ", pourcentage);
    console.log('temps = ', temps);





    barre.style.width=click.x / 100 + '%';
    console.log(barre.style.width)

}*/
