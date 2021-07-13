
function preload(){
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png", "ship-4.png");
  seaImg = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(400,200,200,200);
  sea.addImage(seaImg);
  sea.velocityX=-3;
  shipImg = createSprite(85,290,5,5);
  shipImg.addAnimation("floating", shipImg1);
  shipImg.scale=0.2
}

function draw() {
  background("blue");
 drawSprites ();
 if (sea.x < 0) {
  sea.x=sea.width/8;
}
}