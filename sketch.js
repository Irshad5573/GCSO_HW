var car,wall;
var speed,weight;

function setup() {

  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2);

  speed=random(90,190);
  weight=random(400,1500);

  car.velocityX=speed;  

  createCanvas(1600,400);
  
}

function draw() {
  background(0);  
  drawSprites();

  car.shapeColor="white";
  
  car.collide(wall);

  if(car.velocityX>100){
    car.shapeColor="green";
  }else if(car.velocityX>100){
    car.shapeColor="yellow";
  }else if(car.velocityX<180){
    car.shapeColor="red";
  }

}