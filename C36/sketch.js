var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var car1_img;
var car2_img;
var track;
var car1,car2,cars;
 var allPlayers;
var game,form,player;
var gameState;
var fuelImg,powercoinImg
var fuels,powerCoins
var obstacle1Image,obstacle2Image;
var obstacles;

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1_img= loadImage("car1.png");
  car2_img= loadImage("car2.png");
  track=loadImage("track.jpg");
powercoinImg=loadImage("goldCoin.png");
fuelImg=loadImage("fuel.png");
obstacle1Image = loadImage("obstacle1.png");
obstacle2Image = loadImage("obstacle2.png");

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
 // bgImg = backgroundImage;
}

function draw() {
  background(backgroundImage);
  if(playerCount===2){
 game.update(1)
  }
  if(gameState===1){
    game.play()
  }
}

function windowResized() {//an event 
  resizeCanvas(windowWidth, windowHeight);
}
