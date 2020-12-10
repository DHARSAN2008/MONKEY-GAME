
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var survivalTime=0;
var ground;

function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey = createSprite(75,350,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
 
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  
  FoodGroup=createGroup();
  obstacleGroup=createGroup();
 
}


function draw() {
 
  background(280);
  
  ground.x=ground.width /2;
  
  survivalTime=Math.ceil(frameCount/30)
  stroke("black");
  textSize(20);
  fill("black");
  textFont("algerian");
  text("Survival Time:"+ survivalTime,125,25);
  
  monkey.collide(ground);
  
  
  
  if(keyDown ("space")&& monkey.y>= 250){
    monkey.velocityY=-15;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  
  spawnFood();
  spawnObstacles();
  
  drawSprites();
  
  
}

function spawnFood(){
  
  if (frameCount % 80 === 0) {
    var food = createSprite(600,120,40,10);
    food.y = Math.round(random(120,200),10,10);
    food.addImage(bananaImage);
    food.scale = 0.1;
    food.velocityX = -5;
    
     
    food.lifetime = 120;
    
    FoodGroup.add(food);
  
  }
}

function spawnObstacles(){
  
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(600,315,40,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -10;
    
     
    obstacle.lifetime = 120;
    
    obstacleGroup.add(obstacle);
  
  }
}






