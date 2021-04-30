var backI, backS;
var w,h

function preload(){
   backI=loadImage("img/sprite_00.png")
}

function setup(){
   createCanvas(windowWidth,windowHeight);
   w=windowWidth;
   h=windowHeight;
   console.log(windowWidth);
   console.log(windowHeight);
   backS=createSprite(displayWidth,displayHeight,displayWidth,displayHeight);

   backS.addImage(backI);
   //backS.scale
}

function draw(){
   background("white");
   backS.velocityX=-2
   /*camera.position.x+=5;
   if(camera.position.x>windowWidth){
       camera.position.x=windowWidth/2;
   }*/

   if(backS.x<0){
       backS.x=backS.width/2
   }

   drawSprites();
}