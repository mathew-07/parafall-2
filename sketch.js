var background1,backgroundimage
var plane,planeimage
var stephany,stephanyimage
var parachute,parachuteimage


function preload(){
  backgroundimage=loadImage("images/skybackground.jpg")
  planeimage=loadImage("images/planeimage.png")
  stephanyimage=loadImage("images/stephanyimage.png")
  parachuteimage=loadImage("images/parachutereal.png")

  
}


function setup() {
  createCanvas(1250,700);
  background1=createSprite(700, 500, 1000, 1000);
  background1.addImage(backgroundimage)
  background1.scale=3
  background1.velocityY=-30
  background1.y=background1.width/2
  plane = createSprite(500,100,40,16)
  plane.addImage(planeimage)
  stephany = createSprite(500,140,10,10)
  stephany.addImage(stephanyimage)
  stephany.scale = 0.4
  
}


function draw() {
  background(255,255,255);
  if(background1.y<0){
    background1.y=background1.width/2

  }
  if(keyDown("RIGHT_ARROW")&&stephany.x<1150){
    stephany.x+=6
  }
  if(keyDown("LEFT_ARROW")&&stephany.x>100){
    stephany.x+=-6
  }
  if(keyDown("DOWN_ARROW")&&stephany.y<500){
    stephany.y+=6
  }
  if(keyDown("UP_ARROW")&&stephany.y>100){
    stephany.y+=-6
  }
  spawnparachute()
  drawSprites();
}

function spawnparachute(){
if(frameCount % 100===0){
  parachute = createSprite(Math.round(random(100,1200)),50,30,30)
  parachute.velocityY=5
  parachute.addImage(parachuteimage)
  parachute.scale=0.2
  parachute.lifetime = 700
}
}
