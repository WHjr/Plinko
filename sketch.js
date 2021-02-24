const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies





var particles = []
var plinkos = []
var dividers = []

function setup() {
  createCanvas(600,600);
  engine = Engine.create()
  world = engine.world
  //creating ground
  ground = new Ground(300,590,600,20)
  //creating dividers
  for (var i = 0; i < 6; i++){
    dividers.push(new Divider(5 + 118*i,475))
  }
  //creating rows of plinkos
  for (var i = 0; i < 10; i++){
    plinkos.push(new Plinko(75 + 50*i,75))
  }
  for (var i = 0; i < 11; i++){
    plinkos.push(new Plinko(50 + 50*i,150))
  }
  for (var i = 0; i < 10; i++){
    plinkos.push(new Plinko(75 + 50*i,225))
  }
  for (var i = 0; i < 11; i++){
    plinkos.push(new Plinko(50 + 50*i,300))
  }
  
  
  Engine.run(engine)
}

function draw() {
  background("pink");  

  if(frameCount % 60 === 0){
    particles.push(new Particle(random(100,500),-10))
  }

  ground.display();
  for (i = 0; i < plinkos.length; i++){
    plinkos[i].display();
  }
  for (i = 0; i < dividers.length; i++){
    dividers[i].display();
  }
  for (i = 0; i < particles.length; i++){
    particles[i].display();
  }
 
}

function mousePressed(){
  particles.push(new Particle(mouseX,mouseY))
}