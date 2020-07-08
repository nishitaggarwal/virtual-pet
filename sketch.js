var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var score = 0;

var form, player, game;
 var MilKGroup
var allPlayers;
function preload(){

Milk = loadImage("bottler.png")
Dog = loadImage("Dog.png")
}
function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  MilKGroup = new Group();
}


function draw(){
  background(187,214,69)

if(playerCount === 4){

game.update(1);


}

 if(gameState === 1){

clear()
game.play();
 }

}
