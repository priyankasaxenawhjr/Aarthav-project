const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var canvas, backgroundImage;
var mc2;

var gameState = 1;
var mc1, wall, lazer1, wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15; 

var lives;
var score = 3;

function preload(){

  if(gameState = 1){
    backgroundImage = loadImage("lvl1 maze.jpg");
    lives3 = loadAnimation("heart3.png");
    lives2 = loadAnimation("heart2.png");
    lives1 = loadAnimation("heart1.png");
    mc2 = loadAnimation( "a.png", "b.png", "c.png", "d.png", "e.png", "f.png", "g.png", "h.png", "i.png", "j.png", "k.png", "l.png", "m.png",);
  }
}

function setup(){
 
  canvas = createCanvas(600, 600);
  if(gameState = 1){

    life = createSprite(550, 20, 20, 20);
    life.addAnimation("lives3", lives3);
    life.addAnimation("lives2", lives2);
    life.addAnimation("lives1", lives1);
    
    wall1 = createSprite(10,70,100,1000);
    wall2 = createSprite(370,20,500,80);
    wall3 = createSprite(207,145,172,55);
    wall4 =createSprite(379,203,57,172);
    wall5 = createSprite(500,145,200,57);
    wall6 = createSprite(300,260,130,57);
    wall7 = createSprite(148,373,57,282);
    wall8 = createSprite(80,401,100,57);
    wall9 = createSprite(380,430,57,169);
    wall10 = createSprite(380,375,287,57);
    wall11 = createSprite(250,487,210,57);
    wall12 = createSprite(495,305,57,143);
    wall13 = createSprite(590,270,22,495);
    wall14 = createSprite(523,487,115,57);
    wall15 = createSprite(300,590,600,40);
    mc1 = createSprite(85,35,20,20);
    lazer1 = createSprite(560, 68, 5,60);
    lazer1.shapeColor = "red";
    lazer1.velocityX = -5;
    mc1.addAnimation("player", mc2);
    mc1.scale = 0.5;
    mc1.debug=true;
    lazer1.debug = true;
    mc1.setCollider("circle", 0,30, 80);

    life.scale = 0.25;


    wall1.visible = false;
    wall2.visible = false;
    wall3.visible = false;
    wall4.visible = false;
    wall5.visible = false;
    wall6.visible = false;
    wall7.visible = false;
    wall8.visible = false;
    wall9.visible = false;
    wall10.visible = false;
    wall11.visible = false;
    wall12.visible = false;
    wall13.visible = false;
    wall14.visible = false;
    wall15.visible = false;


  }  

}


function draw(){

  if(gameState = 1){

    background(backgroundImage);

    if(lazer1.isTouching(wall1)){

      lazer1.velocityX = 5;

    }
    if(lazer1.isTouching(wall13)){

      lazer1.velocityX = -5;

    }

  }
  livess();
  gameover();

  drawSprites(); 
}

function livess()
{
if(frameCount%30===0)
{
  if(lazer1.isTouching(mc1)){
    score-=1;
    console.log(score);
  }

  if(score === 3){
    life.changeAnimation("lives3", lives3);
  }
  else if(score ===2){
    life.changeAnimation("lives2",lives2);
  }
  else{
    life.changeAnimation("lives1",lives1)
  }
}
}
function gameover(){
  if(score === 0){
    lazer1.destroy();
    life.destroy();
    text("GAME OVER", 300,300);
  }
}


