
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy;

function preload()
{

  boy = loadImage("images/boy.png")	

}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	tree = new Tree(700, 650);
	ground = new Ground(width/2, 650, width, 20);
	stone = new Stone(200, 400, 50);
	
	mangoObj1 = new Mango(750, 100, 30);
	mangoObj2 = new Mango(770, 140, 30);
	mangoObj3 = new Mango(790, 180, 30);
	mangoObj4 = new Mango(810, 220, 30);
	mangoObj5 = new Mango(830, 260, 30);
	mangoObj6 = new Mango(720, 100, 30);
	mangoObj7 = new Mango(680, 140, 30);
	mangoObj8 = new Mango(660, 180, 30);
	mangoObj9 = new Mango(640, 220, 30);
	mangoObj10 = new Mango(660, 260, 30);
	mangoObj11 = new Mango(720, 200, 30);
	mangoObj12 = new Mango(740, 240, 30);
	mangoObj13 = new Mango(660, 300, 30);

	launcher = new Launcher(stone.body,{x:230, y:420});

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  image(boy, 200, 500, 200, 200); 
 
  tree.display();
  ground.display();
  stone.display();

  mangoObj1.display();
  mangoObj2.display();
  mangoObj3.display();
  mangoObj4.display();
  mangoObj5.display();
  mangoObj6.display();
  mangoObj7.display();
  mangoObj8.display();
  mangoObj9.display();
  mangoObj10.display();
  mangoObj11.display();
  mangoObj12.display();
  mangoObj13.display();

  launcher.display();

  detectcollision(stone, mangoObj1);
  detectcollision(stone, mangoObj2);
  detectcollision(stone, mangoObj3);
  detectcollision(stone, mangoObj4);
  detectcollision(stone, mangoObj5);
  detectcollision(stone, mangoObj6);
  detectcollision(stone, mangoObj7);
  detectcollision(stone, mangoObj8);
  detectcollision(stone, mangoObj9);
  detectcollision(stone, mangoObj10);
  detectcollision(stone, mangoObj11);
  detectcollision(stone, mangoObj12);
  detectcollision(stone, mangoObj13);
  
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcher.fly();
}

function keyPressed(){
    if (keyCode===32) {
		Matter.Body.setPosition(stone.body, {x:230, y:420});
		launcher.attach(stone.body);
	}    
}

function detectcollision(lstone, lmango ){
     mangoBodyPosition = lmango.body.position
	 stoneBodyPosition = lstone.body.position

	 var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

	 if (distance<= lmango.r+lstone.r) {
		 Matter.Body.setStatic(lmango.body, false)
	 }
}


