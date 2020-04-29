//animations

AnimationAttaque = function(entity){
  ctx.clearRect(entity.x, entity.y, entity.sizeX, entity.sizeY)
  var imageArray = []; // array to hold images
  let image = document.getElementById("attaque");
  let image2 = document.getElementById("joueurDroite");
  imageArray.push(image);
  imageArray.push(image2);

  var millsecondsPerImage = 300;  // each frame is 100 ms 1/10th of a second

  var currentTime = new Date().valueOf(); // get the time in milliseconds

  // Divide current time by how long to display for. Round down with floor
  // then modulo the length of the image array
  var imageToDraw = imageArray[Math.floor(currentTime / millsecondsPerImage) % imageArray.length];

  // draw the current image image
  ctx.drawImage(imageToDraw, entity.x, entity.y);

}
