var car,wall;
var speed,weight;
var deform;
function setup() {
  createCanvas(1600,400);

  
  car=createSprite(50,200,50,50);
  wall=createSprite(1300,200,50,200);
  speed=random(55,90);
  weight=random(400,1500);
  car.velocityX=speed;
}

function draw() {
  background(0,0,0);  
   
  if(wall.x-car.x<(car.width+wall.width)/2)
  {
    
    deform=(0.5*weight*speed*speed)/22500;
    if(deform<100)
    {
      car.shapeColor="green";
      car.velocityX=0;

    }
    if (deform>100 && deform<180) {
      car.shapeColor="yellow";
      car.velocityX=0;

    } 
    if(deform>180) {
      car.shapeColor="red"; 
      car.velocityX=0;

    }
  }
  drawSprites();
}