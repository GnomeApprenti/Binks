//initialisation
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const HEIGHT = 750;
const WIDTH = 1500;

setInterval(update,40);

//constructor
const listeJoueurs = {};

function Entity(nom, x, y, sizeX, sizeY, id){

  let joueur = {
    x:x,
    y:y,
    sizeX:sizeX,
    sizeY:sizeY,
    nom:nom,
    id:id,
  };
  listeJoueurs[id] = joueur;

}

Entity('booba', 150, 150, 100, 200, 'idBooba');
Entity('kaaris', 350, 150, 100, 200, 'idKaaris');

//affichage des entités
function updateEntity(entity){

  ctx.fillRect(entity.x, entity.y, entity.sizeX, entity.sizeY);

}

function update(){

  ctx.clearRect(0,0,WIDTH,HEIGHT);
  for (var i in listeJoueurs){
    updateEntity(listeJoueurs[i]);
  }

}
