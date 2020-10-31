
var log1,log2,log3;
var ground;
var ball;
var hidden_dustbin;
var dustbin;

var background1;



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	hidden_dustbin = loadImage("dustbingreen.png");
}

function setup() {
  rectMode(CENTER);
	createCanvas(1200, 600);


dustbin=createSprite(1000,450,200,200)
dustbin.addImage(hidden_dustbin)
dustbin.scale= 0.80;

  engine = Engine.create();
	world = engine.world;

  ground = new Ground(600,590,1200,20);
  log1=new Dustbin(1000,550,200,20);
  log2=new Dustbin(1090,490,20,200);
  log3=new Dustbin(910,490,20,200);
  ball=new  PaperBall(80,450);
  
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  
  log1.display();
  log2.display();
  log3.display();
  ground.display();
  ball.display();

   textSize(16);
   text("press the up arrow key to throw the trash in the dustbin",50,50)
   text("its ok if you fail you can click on the refresh button to try again",50,70)

  drawSprites();

}





  
function keyPressed() {
	if (keyCode=== UP_ARROW) {
	  Matter.Body.applyForce(ball.body,ball.body.position,{x:120,y:-150});
	}
	}