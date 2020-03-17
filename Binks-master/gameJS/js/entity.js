//constructor joueurs
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

    attaque:false,

  };

  listeJoueurs[id] = joueur;

}

//affichage des entités
DrawEntity = function (entity){

    ctx.fillRect(entity.x, entity.y, entity.sizeX, entity.sizeY);

}

//mise à jour des posititons des joueurs
UpdateEntityPosition = function (entity){
  if(etat == 1){
    //haut
    if (entity.haut)
      entity.y -= entity.vitY

    //bas
    if (entity.bas)
      entity.y += entity.vitY

    //gauche
    if (entity.gauche)
      entity.x -= entity.vitY

    //droite
    if (entity.droite)
      entity.x += entity.vitY
 }
}

//mise à jour des entités
UpdateEntity = function (entity){

  DrawEntity(entity);
  UpdateEntityPosition(entity);
  UpdateCollisions(entity);


}

//update
Update = function (){

  ctx.clearRect(0,0,WIDTH,HEIGHT);
  for (var i in listeJoueurs){
    UpdateEntity(listeJoueurs[i]);
  }

  Pause();

}

//lancement du jeu
Start = function(){

  if(etat == 0){
    ctx.clearRect(0,0,WIDTH,HEIGHT);
    Entity( 375, 375, 100, 200, 'kaaris', 15, 15, 'idKaaris'); //(x, y, sizeX, sizeY, nom, vitX, vitY, id)
    Entity(150, 375, 100, 200, 'booba', 15, 15, 'idBooba');
    setInterval(Update,40);
    etat = 1;
  }

}
