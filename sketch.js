const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var platform;
var bird, slingShot, dustbinImg, dustbin;

function preload() {
    dustbin = loadImage("sprites/dustbin.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    bird = new Bird(200,50);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    
    background("grey");
    
    Engine.update(engine);
    image(dustbin,800,200,200,200);

    bird.display();
    platform.display();
    ground.display();
    slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
}
