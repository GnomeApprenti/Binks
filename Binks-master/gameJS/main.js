//initialisation
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const HEIGHT = 750;
const WIDTH = 1500;

//constructor
let listeJoueurs = {};

Entity = function (nom, x, y, sizeX, sizeY, vitX, vitY, id){

  let joueur = {
    x:x,
    y:y,
    sizeX:sizeX,
    sizeY:sizeY,
    nom:nom,
    vitX:vitX,
    vitY:vitY,
    id:id,
  };
  listeJoueurs[id] = joueur;

}

//affichage des entités

DrawEntity = function (entity){

    ctx.fillRect(entity.x, entity.y, entity.sizeX, entity.sizeY);

}

UpdateEntity = function (entity){

  DrawEntity(entity);

}

Update = function (){

  ctx.clearRect(0,0,WIDTH,HEIGHT);
  for (var i in listeJoueurs){
    UpdateEntity(listeJoueurs[i]);
  }

}

Start = function(){

  Entity('booba', 150, 150, 100, 200, 5, 5, 'idBooba'); //(nom, x, y, sizeX, sizeY, vitX, vitY, id)
  Entity('kaaris', 350, 150, 100, 200, 7, 7, 'idKaaris');

}

document.onkeydown = function(event){

  switch(event.keyCode){
    case 38:
      //haut
      listeJoueurs['idBooba'].y -= listeJoueurs['idBooba'].vitY
      break;
    case 37:
      //gauche
      listeJoueurs['idBooba'].x -= listeJoueurs['idBooba'].vitY
      break;
    case 39:
      //droite
      listeJoueurs['idBooba'].x += listeJoueurs['idBooba'].vitY
      break;
    case 40:
      //bas
      listeJoueurs['idBooba'].y += listeJoueurs['idBooba'].vitY
      break;
    case 90:
      //haut
      listeJoueurs['idKaaris'].y -= listeJoueurs['idKaaris'].vitY
      break;
    case 81:
      //gauche
      listeJoueurs['idKaaris'].x -= listeJoueurs['idKaaris'].vitY
      break;
    case 68:
      //droite
      listeJoueurs['idKaaris'].x += listeJoueurs['idKaaris'].vitY
      break;
    case 83:
      //bas
      listeJoueurs['idKaaris'].y += listeJoueurs['idKaaris'].vitY
      break;

  }

}

setInterval(Update,40);
Start();
