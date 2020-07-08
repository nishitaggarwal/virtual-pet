class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
    var dog = createSprite(200,200,30,30)
    dog.addImage("DOG",Dog)
    dog.scale = 0.4

  
  }

  play(){

form.hide();

textSize(30)
text("game Start ",120,100)

Player.getPlayerInfo();

if(allPlayers!==undefined ){

var display_position = 130

for(var plr in allPlayers ){

if (plr === "player" + player.index){


  fill("red")
}
else {

  fill("black")
}
display_position += 20

textSize(15)

//text(allPlayers[plr].name + ":" + allPlayers[plr].distance,120,display_position )

}



}

if (keyIsDown(UP_ARROW) && player.index !== null){
player.distance += 50
player.update();
spawnFood();
score = score + 1;
}
text("Score::" + score , 300,200)

if(MilKGroup.x === 159){

MilKGroup.setVisibleEach(false);


}

function spawnFood(){

if(frameCount % 100 === 0){

var food = createSprite(200,400,20,20)
food.addImage("MILK",Milk)
food.velocityY = -5;
food.scale = 0.055;
food.lifetime  = 400

food.visible = true;
MilKGroup.add(food)
}

}
drawSprites();
  }
  
}
