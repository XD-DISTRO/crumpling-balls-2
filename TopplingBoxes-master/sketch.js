const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var bird1;
var ground;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,200,75);
    
    bird1 = new Garbage(100, 100);

    ground = new Ground(width/2,height,width,20)
}

function draw(){
    background(0);
    Engine.update(engine);

    box1.display();
    ground.display()
    bird1.display();
    
}