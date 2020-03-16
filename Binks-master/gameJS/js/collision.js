//collisions
UpdateCollisions = function(entity){
  //gauche
  if(entity.x < 0 - canvas.offsetLeft)
    entity.x += entity.vitX;

  //droite
  if(entity.x > WIDTH - entity.sizeX + canvas.offsetLeft)
    entity.x -= entity.vitX;

  //haut
  if(entity.y < 0 - canvas.offsetTop)
    entity.y += entity.vitY;

  //bas
  if(entity.y > HEIGHT - entity.sizeY + canvas.offsetTop)
    entity.y -= entity.vitY;

}
