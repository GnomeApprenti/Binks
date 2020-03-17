//menu
Menu = function(){

  etat = 0;
  let menu = document.getElementById("menu");
  ctx.drawImage(menu, 0, 0);

}
Menu();

//pause
Pause = function(){

  if(etat == 2){
    console.log("pause");
    let pause = document.getElementById("pause");
    ctx.drawImage(pause, 0, 0);
  }

}
