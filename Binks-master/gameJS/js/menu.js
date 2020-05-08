//menu

//let j1 = document.getElementById('image_kaaris');
//let j2 = document.getElementById('image_booba');

Menu = function(){

  etat = 0;
  let menu = document.getElementById("menu");
  ctx.drawImage(menu, 0, 0);

//ctx.drawImage(j1, 50, 500);
//ctx.drawImage(j2, 1250, 500);

}

Menu();

//pause
Pause = function(){

  if(etat == 2){
    let pause = document.getElementById("pause");
    ctx.drawImage(pause, 0, 0);
  }

}
