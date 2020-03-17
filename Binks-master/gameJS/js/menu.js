//menu
Menu = function(){

  var menu = document.getElementById("menu");
  ctx.drawImage(menu, 0, 0);

}
Menu();


Pause = function(){

  if(etat == 2){
    console.log("pause");
    var pause = document.getElementById("pause");
    ctx.drawImage(pause, 0, 0);
  }

}
