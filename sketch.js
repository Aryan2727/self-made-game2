var square1,square1IMG
var ground1,groundIMG

function preload(){
  square1IMG = loadImage("images/square.png")
  groundIMG = loadImage("images/ground.png")
}
function setup() {
  createCanvas(1280, 609);
 
  square1 = createSprite(1000,100,30,30)
  square1.addImage(square1IMG)
  square1.scale = 0.5

  ground1 = createSprite(600,100,12800,20)
  //ground1.addImage(groundIMG)
  ground1.shapeColor = "brown"
  ground1.scale = 0.3
  
  
 
  
}

function draw() {
 
background("black")

if(keyDown("space")) {
  square1.velocityY = -12;
}

square1.velocityY += 1
//colliding()
square1.collide(ground1)

drawSprites(); 
   }
function keys(){
  if(keyDown(RIGHT_ARROW)){
  square1.x += 10
  }
}
function colliding(){
  
}