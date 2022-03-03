var Play=1;
var End =0;
var gameState=Play;

var score;

var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var nuvem,nuvemimg;
var obs1,bos2,obs3,obs4,obs5,obs6;





function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  nuvemimg = loadImage("cloud.png");
  groundImage = loadImage("ground2.png");
 obs1 = loadImage("obstacle1.png")
 obs2 = loadImage("obstacle2.png")
 obs3 = loadImage("obstacle3.png")
 obs4 = loadImage("obstacle4.png")
 obs5 = loadImage("obstacle5.png")
 obs6 = loadImage("obstacle6.png")

}

function setup() {

  createCanvas(600,200)
  
  //criar um sprite de trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //criar um sprite ground (solo)
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //criar solo invisível
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
 
  var sorte=Math.round(random(1,100));
console.log(sorte);
}

function draw() {
  //definir cor do fundo
  background(220);
  
  
  
  // pular quando tecla espaço for pressionada
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //impedir que o trex caia
  trex.collide(invisibleGround);
gerarNuvem();
  gerarobstaculos();
  drawSprites();
  
}

function gerarNuvem(){
  if (frameCount%60===0) {
    nuvem=createSprite(600,100,40,10);
nuvem.addImage(nuvemimg);
nuvem.velocityX=-3;
var newY=Math.round(random(10,60));
nuvem.y=newY;
nuvem.lifetime=200;
  }
  
}
function gerarobstaculos(){
  if (frameCount%60===0) {
    var obstaculo =createSprite(600,165,10,400);
obstaculo.scale = 0.5
obstaculo.velocityX= -4;
var newimg=Math.round(random(1,6));
switch (newimg) {
  case 1:obstaculo.addImage(obs1);
    
    break;
    case 2:obstaculo.addImage(obs2);
    
    break;
    case 3:obstaculo.addImage(obs3);
    
    break;
     case 4:obstaculo.addImage(obs4);
    
    break;
     case 5:obstaculo.addImage(obs5);
    
    break;
     case 6:obstaculo.addImage(obs6);
    
    break; 
}
nuvem.lifetime=200;
  }
  
}







