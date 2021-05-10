const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.Constraint;

var roof;

var bob1;
var bob2;
var bob3;
var bob4;
var bob5;

var rope1;
var rope2;
var rope3;
var rope4;
var rope5;

var world;

function preload() {

}

function setup() {
  createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  roof = new Roof(400, 200, 500, 60);

  bob1 = new Bob(200, 500);
  bob2 = new Bob(300, 500);
  bob3 = new Bob(400, 500);
  bob4 = new Bob(500, 500);
  bob5 = new Bob(600, 500);

  rope1 = new Rope(bob1.body, roof.body, -80, 0);
  rope2 = new Rope(bob2.body, roof.body, -40, 0);
  rope3 = new Rope(bob3.body, roof.body, 0, 0);
  rope4 = new Rope(bob4.body, roof.body, 40, 0);
  rope5 = new Rope(bob5.body, roof.body, 80, 0);

  //Engine
  Engine.run(engine);
}


function draw() {
  background(210)
  //Displaying
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();  

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display(); 

  drawSprites();
}