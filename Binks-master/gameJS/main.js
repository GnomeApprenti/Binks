//initialisation
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const HEIGHT = 750;
const WIDTH = 1500;

var image = document.getElementById("source");
ctx.drawImage(image, 0, 0);
