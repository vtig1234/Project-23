//Project 23
//22/01/2021
//Viyath Wanninayake

var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
//Create bodies for the walls
var wall1,wall2,wall3
//Create sprites for the walls
var wall1sprite,wall2sprite,wall3sprite
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
  
    //Create the walls and colour them all red
    wall1sprite=createSprite(275,612,20,100);
    wall1sprite.shapeColor=("red");
    wall2sprite=createSprite(425,640,300,40);
    wall2sprite.shapeColor=("red");
    wall3sprite=createSprite(580,612,20,100);
    wall3sprite.shapeColor=("red");

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
  
	engine = Engine.create();
	world = engine.world;

  //Make the restitution 0 so that the package doesn't bounce
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
  World.add(world, packageBody);
  

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
    //Create bodies so that the packages bounce of the walls
    wall1=Bodies.rectangle(275,612,20,100,{isStatic:true});
    //Add them to the world
    World.add(world,wall1);
   
    wall2=Bodies.rectangle(425,640,300,40,{isStatic:true});
    World.add(world,wall2);
  
    wall3=Bodies.rectangle(580,612,20,100,{isStatic:true});
    World.add(world,wall3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
   //Make the package able to move and fall down
   Matter.Body.setStatic(packageBody,false);
  }
}



