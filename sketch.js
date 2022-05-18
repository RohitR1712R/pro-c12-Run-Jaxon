var path , pathImg;
var power ;
var bomb ;
var coin ;
var energyDrink;
var power ;
var boy , boyImg ;

function preload(){
  //pre-load images
  pathImg = loadImage ("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");

}

function setup(){
  createCanvas(400,400);
  
  // making path
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;

  //create sprites here
  boy = createSprite(70,300,20,20);
  boy.addAnimation("Running",boyImg);
  boy.scale=0.08;

}


function draw() {
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);

  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();

  }


