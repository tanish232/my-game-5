var playerImg;
var alienImg,alien2Img,alien3Img,alien4Img,alien5Img;
var groundImg;
var bground ,alien,alien2,player,alien3,alien4,alien5;
var laser;
var laserGroup,alienGroup,alien2Group,alien3Group,alien4Group,alien5Group; 
var hp=5; 
var score=0;
var gameState="play";
var gameOver;
function preload(){
playerImg=loadImage("images/spaceship.png")  
alienImg=loadImage("images/alien.png")
groundImg=loadImage("images/space.png")
alien2Img=loadImage("images/alien2.png")
alien3Img=loadImage("images/alien3.png")
alien4Img=loadImage("images/alien4.png")
alien5Img=loadImage("images/alienspaceship.png")
gameOver= loadImage("images/gameover.png") 
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  bground=createSprite(displayWidth/2,displayHeight/2,400,50,1600)
  bground.addImage(groundImg);

  
  player=createSprite(displayWidth/2,displayHeight/2+300,30,30)
  player.addImage(playerImg);
  player.scale=0.3

  bground.velocityY=4; 
  alienGroup=new Group();
  alien2Group=new Group();
  alien3Group=new Group();
  alien4Group=new Group();
  alien5Group=new Group();
  laserGroup=new Group();
}

function draw() {

  background("black");  
 if(gameState==="play"){
 if(bground.y>displayHeight){
 bground.y=displayHeight/2;
}
var x= random(width-550,width+550)
if(frameCount%150===0){
  alien=createSprite(x,displayHeight/2-450,50,50)  
  alien.addImage(alienImg)
  alien.scale=0.5
  alien.velocityY=4;
  alien.lifetime=250
  alienGroup.add(alien)
}
if(frameCount%168===0){
alien2=createSprite(x,displayHeight/2-450,50,50)  
alien2.addImage(alien2Img)
alien2.scale=0.5
alien2.velocityY=5;
alien2.lifetime=250
alien2Group.add(alien2)
}
if(frameCount%172===0){
  alien3=createSprite(x,displayHeight/2-450,50,50)  
  alien3.addImage(alien3Img)
  alien3.scale=0.5
  alien3.velocityY=6;
  alien3.lifetime=250
  alien3Group.add(alien3)
  }
  if(frameCount%160===0){
    alien4=createSprite(x,displayHeight/2-450,50,50)  
    alien4.addImage(alien4Img)
    alien4.scale=0.5
    alien4.velocityY=5;
    alien4.lifetime=250
    alien4Group.add(alien4)  
  }
    if(frameCount%157===0){
      alien5=createSprite(x,displayHeight/2-450,50,50)  
      alien5.addImage(alien5Img)
      alien5.scale=0.3
      alien5.velocityY=5;
      alien5.lifetime=250
      alien5Group.add(alien5)
       
    }
for(var i=0;i<laserGroup.length;i++){
if(laserGroup.get(i).isTouching(alienGroup)){
laserGroup.get(i).destroy();
alienGroup.destroyEach();
score=score+1  
}  
}
for(var i=0;i<laserGroup.length;i++){
  if(laserGroup.get(i).isTouching(alienGroup)){
  laserGroup.get(i).destroy();
  alienGroup.destroyEach();
  score=score+1  
  }  
  }
  for(var i=0;i<laserGroup.length;i++){
    if(laserGroup.get(i).isTouching(alien2Group)){
    laserGroup.get(i).destroy();
    alien2Group.destroyEach();
    score=score+1  
    }  
    }
    for(var i=0;i<laserGroup.length;i++){
      if(laserGroup.get(i).isTouching(alien3Group)){
      laserGroup.get(i).destroy();
      alien3Group.destroyEach();
      score=score+1  
      }  
      }
      for(var i=0;i<laserGroup.length;i++){
        if(laserGroup.get(i).isTouching(alien4Group)){
        laserGroup.get(i).destroy();
        alien4Group.destroyEach();
        score=score+1  
        }  
        }
        for(var i=0;i<laserGroup.length;i++){
          if(laserGroup.get(i).isTouching(alien5Group)){
          laserGroup.get(i).destroy();
          alien5Group.destroyEach();
          score=score+1  
          }  
          }
 if(keyDown(RIGHT_ARROW)){
 player.x=player.x+10;  
 }         
 if(keyDown(LEFT_ARROW)){
  player.x=player.x-10; 
 }
if(alienGroup.isTouching(player)){
 hp=hp-1;
 alienGroup.destroyEach() 
}
if(alien2Group.isTouching(player)){
  hp=hp-1;
  alien2Group.destroyEach() 
 }
 if(alien3Group.isTouching(player)){
  hp=hp-1;
  alien3Group.destroyEach()
 }
 if(alien4Group.isTouching(player)){
  hp=hp-1;
  alien4Group.destroyEach() 
 }
 if(alien5Group.isTouching(player)){
  hp=hp-1;
  alien5Group.destroyEach() 
 }
 }
 if(gameState==="end"){
 player.destroy()
 alienGroup.destroyEach()
 alien2Group.destroyEach()  
 alien3Group.destroyEach() 
 alien4Group.destroyEach()
 alien5Group.destroyEach()
bground.destroy()
laserGroup.destroyEach();
}
 if(hp===0){
gameState="end";
image(gameOver,displayWidth/2-150,height/2-100,400,100)
 }  
 
drawSprites();
textSize(30);
    fill("red")
    text("HP "+hp,displayWidth/2-550,displayHeight/2-300)
    textSize(30);
    fill("white")
    text("SCORE "+score,displayWidth/2-550,displayHeight/2-250)
  }
function keyPressed(){
//if(keyCode===RIGHT_ARROW){
  //player.x= player.x+100;  
//}  
if(keyCode===LEFT_ARROW){
 player.x=player.x-100; 
}
if(keyCode===32){
laser=createSprite(player.x,displayHeight-50,10,50)
laser.shapeColor="red";  
laser.velocityY=-6
laserGroup.add(laser);
}

}