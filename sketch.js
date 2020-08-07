
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var groundobject;
var divisionHeight=300,divisionObject;
function preload()
{
	
}

function setup() {
	createCanvas(480,800);

		var particles = [];
		var plinkos = [];
		var divisions =[];

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundobject=new Ground(width/2,600,width,20);
	divisonobject=new Division(5,400,80,300);
	Engine.run(engine);
  
}


function draw() {
 // rectMode(CENTER);
  background("black");
  groundobject.display();
	divisionObject.display();
   //drawSprites();
 
}



