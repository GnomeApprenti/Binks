//constructor
let listeJoueurs = {};

Entity = function (x, y, sizeX, sizeY, nom, vitX, vitY, id){

  let joueur = {

    x:x,
    y:y,

    sizeX:sizeX,
    sizeY:sizeY,

    nom:nom,

    vitX:vitX,
    vitY:vitY,

    id:id,

    haut:false,
    bas:false,
    gauche:false,
    droite:false,

  };

  listeJoueurs[id] = joueur;

}

//affichage des entités
DrawEntity = function (entity){

    ctx.fillRect(entity.x, entity.y, entity.sizeX, entity.sizeY);

}

UpdateEntityPosition = function (entity){

  if (entity.haut)
    entity.y -= entity.vitY

  if (entity.bas)
    entity.y += entity.vitY

  if (entity.gauche)
    entity.x -= entity.vitY

  if (entity.droite)
    entity.x += entity.vitY

}

UpdateEntity = function (entity){

  DrawEntity(entity);
  UpdateEntityPosition(entity);
  UpdateCollisions(entity);


}

Update = function (){

  ctx.clearRect(0,0,WIDTH,HEIGHT);
  for (var i in listeJoueurs){
    UpdateEntity(listeJoueurs[i]);
  }

}

Start = function(){

  ctx.clearRect(0,0,WIDTH,HEIGHT);
  Entity( 375, 375, 100, 200, 'kaaris', 15, 15, 'idKaaris'); //(x, y, sizeX, sizeY, nom, vitX, vitY, id)
  Entity(150, 375, 100, 200, 'booba', 15, 15, 'idBooba');
  setInterval(Update,40);

}
