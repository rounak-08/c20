var a,b;
function setup() {
  createCanvas(400,400);
  a=createSprite(200,200,50,80);
  b=createSprite(300, 100, 40, 30);
  a.shapeColor="green";
  b.shapeColor="green";
}

function draw() {
 background(0,0,0);  
  a.x=World.mouseX;
  a.y=World.mouseY;
  if(a.x-b.x<a.width/2+b.width/2 && b.x-a.x<a.width/2+b.width/2 && a.y-b.y<a.height/2+b.height/2 && b.y-a.y<a.height/2+b.height/2 ){
    a.shapeColor="red";
  b.shapeColor="red";
  }
  else{
    a.shapeColor="green";
  b.shapeColor="green";
  }
  console.log(a.x-b.x);

  drawSprites();
}