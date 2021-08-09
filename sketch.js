const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ROOF, rope1, rope2, rope3, rope4, rope5, world ;

var bob1, bob2, bob3, bob4, bob5;

function setup() {
	createCanvas(800, 500);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;
	
	ROOF = new Roof(400,125,150,30);

	rope1 = new Rope(bob1.body,ROOF.body,-100,0);
	rope2 = new Rope(bob2.body,ROOF.body,-50,0);
	rope3 = new Rope(bob3.body,ROOF.body,0,0);
	rope4 = new Rope(bob4.body,ROOF.body,50,0);
	rope5 = new Rope(bob5.body,ROOF.body,100,0);

	bob1 = new Bob(350,400,50);
	bob2 = new Bob(350,400,50);
	bob3 = new Bob(350,400,50);
	bob4 = new Bob(350,400,50);
	bob5 = new Bob(350,400,50);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  ROOF.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
}



