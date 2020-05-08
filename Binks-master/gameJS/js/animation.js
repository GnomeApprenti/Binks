//animations

AnimationAttaque = function(entity){
  ctx.clearRect(entity.x, entity.y, entity.sizeX, entity.sizeY)
  var imageArray = [];
  let image1 = document.getElementById("attaque1");
  let image2 = document.getElementById("attaque2");
  let image3 = document.getElementById("attaque3");
  let image4 = document.getElementById("attaque4");
  imageArray.push(image1, image2, image3, image4);

  var millsecondsPerImage = 200;

  var currentTime = new Date().valueOf();

  var imageToDraw = imageArray[Math.floor(currentTime / millsecondsPerImage) % imageArray.length];


  ctx.clearRect(entity.x, entity.y, entity.sizeX, entity.sizeY);
  ctx.drawImage(imageToDraw, entity.x, entity.y);



}
