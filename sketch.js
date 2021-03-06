var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,side1,sid2,side3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boxBody,boxBody2,boxBody3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	side1 = createSprite(380,650,200,20)
	side2 = createSprite(290,610,20,100)
	side3 = createSprite(470,610,20,100)

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	
	boxBody = Bodies.rectangle(380,630,200,20, {isStatic:true} );
	 World.add(world, boxBody);

	 boxBody2 = Bodies.rectangle(290,610,20,100, {isStatic:true} );
	 World.add(world, boxBody2);

	 
	 boxBody3 = Bodies.rectangle( 470,610,20,100, {isStatic:true} );
	 World.add(world, boxBody3);
	 
	 ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	 World.add(world, ground);

	 var ground_options ={
        isStatic: false
    }


	
	Engine.run(engine);
  
}


function draw() {
  background(0);

  rectMode(CENTER);

  side1.shapeColor=color("red")
  side2.shapeColor=color("red")
  side3.shapeColor=color("red")

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  
  
  keyPressed();
  drawSprites();
 
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody,isStatic = false)
  }
}



