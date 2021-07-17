var a,b;

function setup() {
  createCanvas(800,400);
 a= createSprite(400, 200, 50, 50);
 b=createSprite(300,200,40,40);
 a.shapeColor="blue";
 b.shapeColor="blue";
}

function draw() {

  background(0); 
  
  a.x=mouseX;
  a.y=mouseY;
  console.log(a.x-b.x);
  if(a.x-b.x<45 && b.x-a.x<45 && a.y-b.y<45 && b.y-a.y<45){
    a.shapeColor="red";
    b.shapeColor="red";
  }
  else{
    a.shapeColor="blue";
    b.shapeColor="blue";
  }
  
  drawSprites();
}