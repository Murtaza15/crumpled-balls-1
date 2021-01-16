
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground,paper,dustbin;


function preload()
{
	
}

function setup() {
	createCanvas(800, 400);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;	

	dustbin=new DustBin(720,390,100,10);

	paper = new Paper(100,300,10);

	ground = Bodies.rectangle(width/2,400,width,10,
	{
		isStatic:true

	});
	World.add(world,ground);
	


Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
 dustbin.display();
  

  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:14,y:-13})
	}
}

