var brushing,brushingImg
var bath,bathImg;
var drink,drinkImg;
var eat,eatImg;
var gym,gymImg;
var gym1,gym1Img;
var move,moveImg;
var sleep,sleepImg;
var iss,issImg;
var edges
var wall1,wall2,wall3,wall4





function preload(){
bathImg = loadAnimation("bath1.png","bath2.png");
drinkImg = loadAnimation("drink1.png","drink2.png");
eatImg = loadAnimation("eat1.png","eat2.png");
gymImg = loadAnimation("gym1.png","gym2.png");
gym1Img = loadAnimation("gym11.png","gym12.png");
moveImg = loadImage("move.png");
sleepImg = loadImage("sleep.png");
issImg = loadImage("iss.png");
brushingImg = loadImage("brush.png");
}



function setup() {
  createCanvas(800,400);

 

  iss = createSprite(400,200,10,10);
  iss.addImage("iss",issImg)
  iss.scale=0.165;

  sleep = createSprite(400,200,100,100);
  sleep.addImage("sleep",sleepImg)
  sleep.scale= 0.08;
  sleep.visible = false;

  brushing = createSprite(400,200,10,10);
  brushing.addImage("brush",brushingImg);
  brushing.scale = 0.08;
  brushing.visible = false

  move = createSprite(400,200,10,10);
  move.addImage("move",moveImg);
  move.scale = 0.08;


  gym = createSprite(400,200,10,10);
  gym.addAnimation("gym",gymImg);
  gym.scale = 0.08;
  gym.visible = false;

  gym1= createSprite(400,200,10,10);
  gym1.addAnimation("gym",gym1Img);
  gym1.scale = 0.1;
  gym1.visible = false;

  eat = createSprite(400,200,10,10);
  eat.addAnimation("eat",eatImg);
  eat.scale = 0.08;
  eat.visible = false;

  bath = createSprite(400,200,10,10);
  bath.addAnimation("bath",bathImg);
  bath.scale = 0.08;
  bath.visible = false;

  drink = createSprite(400,200,10,10);
  drink.addAnimation("drink",drinkImg);
  drink.scale = 0.08;
  drink.visible = false;


  edges = createEdgeSprites();

}

function draw() {
  background(75);

    sleep.bounceOff(edges);
    drink.bounceOff(edges);
    bath.bounceOff(edges);
    eat.bounceOff(edges);
    gym.bounceOff(edges);
    gym1.bounceOff(edges);
    brushing.bounceOff(edges);
    move.bounceOff(edges);

 
  if(keyDown(UP_ARROW)){
    sleep.visible = true;
    drink.visible = false;
    bath.visible = false;
    eat.visible = false;
    gym.visible = false;
    gym1.visible = false;
    brushing.visible = false;
    move.visible = false;
    sleep.velocityX = 2;
    sleep.velocityY = -4;
    
    
    

  }

  if(keyDown(DOWN_ARROW)){
    drink.visible = true;
    sleep.visible = false;
    bath.visible = false;
    eat.visible = false;
    gym.visible = false;
    gym1.visible = false;
    brushing.visible = false;
    move.visible = false;
    drink.velocityX = 2;
    drink.velocityY = -4;


  }

  if(keyDown(RIGHT_ARROW)){
    bath.visible = true;
    sleep.visible = false;
    drink.visible = false;
    eat.visible = false;
    gym.visible = false;
    gym1.visible = false;
    brushing.visible = false;
    move.visible = false;
    bath.velocityX = 2;
    bath.velocityY = -4;

  }
  
  if(keyDown(LEFT_ARROW)){
    gym.visible = true  
    sleep.visible = false;
    drink.visible = false;
    eat.visible = false;
    gym1.visible = false;
    bath.visible = false;
    brushing.visible = false;
    move.visible = false;
    gym.velocityX = 2;
    gym.velocityY = -4;
  }

  if(keyDown("m")){
    bath.visible = false;
    sleep.visible = false;
    drink.visible = false;
    eat.visible = false;
    gym.visible = false;
    gym1.visible = true;
    brushing.visible = false;
    move.visible = false;
    gym1.velocityX = 2;
    gym1.velocityY = -4;

  }

  if(keyDown("space")){
    bath.visible = false;
    sleep.visible = false;
    drink.visible = false;
    eat.visible = false;
    gym.visible = false;
    gym1.visible = false;
    brushing.visible = true;
    move.visible = false;
    brushing.velocityX = 2;
    brushing.velocityY = -4;
  }

  if(keyDown("n")){
    bath.visible = false;
    sleep.visible = false;
    drink.visible = false;
    eat.visible = false;
    gym.visible = false;
    gym1.visible = false;
    brushing.visible = false;
    move.visible = true;
    move.velocityX = 2;
    move.velocityY = -4;
  }
  



  drawSprites();
  push();
  textSize(20);
  fill("white");
  text("Instructions: ",20,40);
  text("Up arrow = sleep",20,60);
  text("Down arrow = drink",20,80);
  text("Right arrow = bath",20,100);
  text("Left arrow = gym",20,120);
  text("M key = gym1",20,140);
  text("spacebar = brushing",20,160);
  text("N key = move",20,180);
  pop();
}