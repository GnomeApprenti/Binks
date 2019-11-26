//initialisation du canvas
const canvas = document.getElementById("Canvas"),
      ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = false;
document.getElementById("Canvas").style.backgroundColor = "rgb(39,42,43)";

//tracking souris
canvas.addEventListener('mousedown',onDown,false)
canvas.addEventListener('mousemove',function(e){
  ctx.fillStyle = 'black';
  ctx.clearRect(0,0,150,50);
  ctx.fillText(`x : ${e.x-canvas.offsetLeft} y : ${e.y-canvas.offsetTop-canvas.scrollTop}`, 10, 10);
})

//generation d'image
let mecDeTess = new Image();
mecDeTess.onload = function () {
    ctx.drawImage(mecDeTess, 0, 0, 128, 128, 1300, 2725, 128, 128);//(image, sourceX, sourceY, souceW, sourceH, destinationX, destinationY, destinationW, destinationH)
}
mecDeTess.src = "src/images/mecDeTess.png";

let logo1 = new Image();
logo1.onload = function() {
  ctx.drawImage(logo1, 100, 100, 100, 100);
}
logo1.src = "src/images/logo1.jpg";

let logo2 = new Image();
logo2.onload = function() {
  ctx.drawImage(logo2, 100, 275, 100, 100);
}
logo2.src = "src/images/logo2.jpg";

let logo3 = new Image();
logo3.onload = function() {
  ctx.drawImage(logo3, 100, 450, 100, 100);
}
logo3.src = "src/images/logo3.jpg";

let logo4 = new Image();
logo4.onload = function() {
  ctx.drawImage(logo4, 100, 625, 100, 100);
}
logo4.src = "src/images/logo4.jpg";

let logo5 = new Image();
logo5.onload = function() {
  ctx.drawImage(logo5, 100, 800, 100, 100);
}
logo5.src = "src/images/logo5.jpg";

let logo6 = new Image();
logo6.onload = function() {
  ctx.drawImage(logo6, 100, 975, 100, 100);
}
logo6.src = "src/images/logo6.jpg";

let logo7 = new Image();
logo7.onload = function() {
  ctx.drawImage(logo7, 100, 1150, 100, 100);
}
logo7.src = "src/images/logo7.jpg";

let logo8 = new Image();
logo8.onload = function() {
  ctx.drawImage(logo8, 100, 1325, 100, 100);
}
logo8.src = "src/images/logo8.jpg";

let logo9 = new Image();
logo9.onload = function() {
  ctx.drawImage(logo9, 100, 1500, 100, 100);
}
logo9.src = "src/images/logo9.jpg";

let logo10 = new Image();
logo10.onload = function() {
  ctx.drawImage(logo10, 100, 1675, 100, 100);
}
logo10.src = "src/images/logo10.jpg";

let logo11 = new Image();
logo11.onload = function() {
  ctx.drawImage(logo11, 100, 1850, 100, 100);
}
logo11.src = "src/images/logo11.jpg";

let logo12 = new Image();
logo12.onload = function() {
  ctx.drawImage(logo12, 100, 2025, 100, 100);
}
logo12.src = "src/images/logo12.jpg";

let logo13 = new Image();
logo13.onload = function() {
  ctx.drawImage(logo13, 100, 2200, 100, 100);
}
logo13.src = "src/images/logo13.jpg";

let logo14 = new Image();
logo14.onload = function() {
  ctx.drawImage(logo14, 100, 2375, 100, 100);
}
logo14.src = "src/images/logo14.jpg";

let logo15 = new Image();
logo15.onload = function() {
  ctx.drawImage(logo15, 100, 2550, 100, 100);
}
logo15.src = "src/images/logo15.jpg";

for (i=75; i <= 2525; i += 175){
  ctx.fillRect(75, i, 1370, 150);
}

//détécteur de click
function onDown(event){
  cx = event.pageX-canvas.offsetLeft;
  cy = event.pageY-canvas.offsetTop+canvas.scrollTop;

  if(cx > 100 && cx < 200 && cy > 100 && cy < 200){
    alert('lancer chanson 1');
  }
  if(cx > 100 && cx < 200 && cy > 275 && cy < 375){
    alert('lancer chanson 2');
  }
  if(cx > 100 && cx < 200 && cy > 550 && cy < 650){
    alert('lancer chanson 3');
  }
  if(cx > 100 && cx < 200 && cy > 825 && cy < 925){
    alert('lancer chanson 4');
  }
  if(cx > 100 && cx < 200 && cy > 1100 && cy < 1200){
    alert('lancer chanson 5');
  }
  if(cx > 100 && cx < 200 && cy > 1375 && cy < 1475){
    alert('lancer chanson 6');
  }
  if(cx > 100 && cx < 200 && cy > 1675 && cy < 1775){
    alert('lancer chanson 7');
  }
  if(cx > 100 && cx < 200 && cy > 1950 && cy < 2050){
    alert('lancer chanson 8');
  }
  if(cx > 100 && cx < 200 && cy > 2225 && cy < 2325){
    alert('lancer chanson 9');
  }
  if(cx > 100 && cx < 200 && cy > 2500 && cy < 2600){
    alert('lancer chanson 10');
  }
  if(cx > 100 && cx < 200 && cy > 2775 && cy < 2875){
    alert('lancer chanson 11');
  }
  if(cx > 100 && cx < 200 && cy > 3050 && cy < 3150){
    alert('lancer chanson 12');
  }
  if(cx > 100 && cx < 200 && cy > 3325 && cy < 3425){
    alert('lancer chanson 13');
  }
  if(cx > 100 && cx < 200 && cy > 3600 && cy < 3700){
    alert('lancer chanson 14');
  }
  if(cx > 100 && cx < 200 && cy > 3875 && cy < 3975){
    alert('lancer chanson 15');
  }
}
