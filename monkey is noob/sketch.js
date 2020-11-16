
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
  



function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
//creating canvas  
createCanvas(400,400)
//creating sprite for monkey  
monkey=createSprite(80,315,20,20)  
//adding animation  
monkey.addAnimation("moving",monkey_running) //scaling monkey 
monkey.scale=0.1; 
  
//creating ground  
ground = createSprite(400,350,900,10)
//moving ground  
ground.velocityX=-4;  
//infnite ground   
//ground.x=ground.width/2;
console.log(ground.x)  
  
 FoodGroup=new Group(); 
 obstacleGroup=new Group(); 
}


function draw() {
//creating background  
background("white");
//drawing sprites  
drawSprites(); 
  var survivaltime=0;
  stroke("white");
  textSize(20);
  fill("white");
  text("score;"+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivaltime=Math.ceil(frameCount/frameRate())
  text("survivaltime:"+survivaltime,100,50);
  
  
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
   
  monkey.collide(ground);
   if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -12;
    }
  
    monkey.velocityY = monkey.velocityY + 0.8
 
  
  
  rocks();
  fruit();

}

function fruit(){

if(frameCount%150===0){
banana=createSprite(400,50,10,10)  
banana.y=Math.round(random(60,200));
banana.addImage(bananaImage); 
banana.scale=0.1;  
banana.velocityX=-3;   
banana.lifetime=150;   
FoodGroup.add(banana);  
  

  
   }
}

function rocks(){
if(frameCount%400===0) {
  
  obstacle=createSprite(400,330,10,10);
  obstacle.addImage( obstacleImage);
  obstacle.scale=0.1;
  obstacle.velocityX=-5
  obstacle.lifetime=150;
  obstacleGroup.add(obstacle);
  
} 
  
}



