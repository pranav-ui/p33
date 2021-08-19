var engine,world;
var snow ;
var bgImg;
var bg;

function preload(){
bgImg=loadImage("snow3.jpg");

}

function setup() {
  createCanvas(800,400);
  engine = Matter.Engine.create(); 
  world = engine.world;

 // bg=createSprite(400,200);
//  bg.addImage(bgImg);
//  bg.scale=0.8;
  snow=new Snow(random(100,700),0,50,50);
  snow2=new Snow(random(100,700),0,50,50);
  snow3=new Snow(random(100,700),0,50,50);
  snow4=new Snow(random(100,700),0,50,50);
  
}

function draw() {
  background(bgImg);  
  Matter.Engine.update(engine);
  
  snow.display();
  snow2.display();
  snow3.display();
  snow4.display();

  drawSprites();
}



