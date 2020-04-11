

const Engine = Matter.Engine,
      World = Matter.World,
      Bodies = Matter.Bodies;

    var engine,world;
    var ground;
    var boxes = [];
    var gSlider;
 
 
function setup() {
    createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);       
    
    ground = new Ground(200,380,400,10);
        
}
 
function draw() {  
    
    background(0);  
    ground.display();  
    var fVal = gSlider.value();   
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].show();
    }
}
function mousePressed() {
    if (mouseY < 350) {
        boxes.push(new Box(mouseX, mouseY, random(10, 40), random(10, 40)));
    }
}
function Box(x, y, w, h, options) {    
    var options = {
        friction: 0.5,
        restitution:0.5
    }    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);

    this.show = function () {
        var pos = this.body.position;
        var angle = this.body.angle;

          push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(1);
        stroke("blue");
        fill(127);
        rect(0, 0, this.w, this.h);
        pop();
    }
}