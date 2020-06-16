var fixedRect, movingRect;
var object1;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  object1 = createSprite(20, 800,80,30);
  object1.shapeColor = "green";
  object1.debug = true;
  object1.velocityY = +5;



  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  bounceOff(movingRect,fixedRect);  
  
  drawSprites();



}
function bounceOff(object3,object4) {
  if (object3.x - object4.x < object4.width/2 + object3.width/2
    &&object4.x - object3.x < object4.width/2 + object3.width/2) {
      object3.velocityX = object3.velocityX * (-1);
      object4.velocityX = object4.velocityX * (-1);
}
if (object3.y - object4.y < object4.height/2 + object3.height/2
  && object4.y - object3.y < object4.height/2 + object3.height/2){
    object3.velocityY = object3.velocityY * (-1);
    object4.velocityY = object4.velocityY * (-1);
}



}


