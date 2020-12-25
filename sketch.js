var wall,thickness;
var bullet,speed,weight;
var Lbullet,Lwall,bulletRightEdge,wallLeftEdge;
function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet = createSprite(50, 200, 15, 10);
  bullet.velocityX= speed;
  bullet.shapeColor="white";
  

  wall=createSprite(1200,200,thickness,height/2);
  
}

bullet.collide(wall);

function draw() {
  background(0,0,0);  

  

  /*if(wall.x-bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var deformation=0.5* weight* speed* speed/(thickness*thickness*thickness);
    if(deformation>10){
      wall.shapeColor=color(255,0,0);
    }
    if(deformation<11){
      wall.shapeColor=color(0,255,0);
    }
  }*/

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }

  }

  drawSprites();
}