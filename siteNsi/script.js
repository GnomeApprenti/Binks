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
  ctx.fillText(`x : ${e.x-canvas.offsetLeft} y : ${e.y-canvas.offsetTop}`, 10, 10);
})

//generation d'image
let mecDeTess = new Image();
mecDeTess.onload = function () {
    ctx.drawImage(mecDeTess, 0, 0, 128, 128, 1300, 590, 128, 128);//(image, sourceX, sourceY, souceW, sourceH, destinationX, destinationY, destinationW, destinationH)
}
mecDeTess.src = "src/images/mecDeTess.png";

let logoChanson = new Image();
logoChanson.onload = function() {
  ctx.drawImage(logoChanson, 100, 100, 200, 100);
}
logoChanson.src = "src/images/logoChanson.png";

let logo50e = new Image();
logo50e.onload = function() {
  ctx.drawImage(logo50e, 100, 275, 200, 100);
}
logo50e.src = "src/images/logo50e.png";

let logoTn = new Image();
logoTn.onload = function() {
  ctx.drawImage(logoTn, 100, 450, 200, 100);
}
logoTn.src = "src/images/logoTn.png";

ctx.fillRect(75, 75, 1370, 150);
ctx.fillRect(75, 250, 1370, 150);
ctx.fillRect(75, 425, 1370, 150);

//détécteur de click
function onDown(event){
  cx = event.pageX-canvas.offsetLeft;
  cy = event.pageY-canvas.offsetTop;
  if(cx > 100 && cx < 300 && cy > 100 && cy < 200){
    alert('touché');
  }
}
