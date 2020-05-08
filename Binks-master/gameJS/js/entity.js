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
    last:"droite",

  };

  listeJoueurs[id] = joueur;

}

//affichage des entités
DrawEntity = function (entity){

    let joueurGauche = document.getElementById("joueurGauche");
    let joueurDroite = document.getElementById("joueurDroite");

    if (entity.attaque == true){
      AnimationAttaque(entity);
    }
    else{
      //immobile
      if(entity.last == "droite" && !entity.droite && !entity.gauche)
        ctx.drawImage(joueurDroite, 200, 0, entity.sizeX, entity.sizeY, entity.x, entity.y, entity.sizeX, entity.sizeY);
      else if(entity.last == "gauche" && !entity.droite && !entity.gauche)
        ctx.drawImage(joueurGauche, 0, 0, entity.sizeX, entity.sizeY, entity.x, entity.y, entity.sizeX, entity.sizeY);

      //mouvement
      if(entity.gauche && !entity.droite)
        ctx.drawImage(joueurGauche, 0, 0, entity.sizeX, entity.sizeY, entity.x, entity.y, entity.sizeX, entity.sizeY);
      else if(entity.droite && !entity.gauche)
        ctx.drawImage(joueurDroite, 200, 0, entity.sizeX, entity.sizeY, entity.x, entity.y, entity.sizeX, entity.sizeY);
      else if(entity.gauche && entity.droite)
        ctx.drawImage(joueurDroite, 200, 0, entity.sizeX, entity.sizeY, entity.x, entity.y, entity.sizeX, entity.sizeY);
    }
    //(img, source.x, source.y, source.width, source.height, dest.x, dest.y, dest.width, dest.height)



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

  ctx.drawImage(background, 0, 0);
  for (var i in listeJoueurs){
    UpdateEntity(listeJoueurs[i]);
  }
  Pause();

}

//lancement du jeu
Start = function(){

  if(etat == 0){
    ctx.clearRect(0,0,WIDTH,HEIGHT);
    Entity( 375, 375, 200, 200, 'kaaris', 15, 15, 'idKaaris'); //(x, y, sizeX, sizeY, nom, vitX, vitY, id)
    Entity(150, 375, 200, 200, 'booba', 15, 15, 'idBooba');
    setInterval(Update,40);
    etat = 1;
    background = document.getElementById('background');
  }

}
