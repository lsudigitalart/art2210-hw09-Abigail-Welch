let dot1
let dot2
let dot3
let checkeredline

function preload(){
    checkeredline = loadImage ("checkered line.jpg");
}

function setup() {
  createCanvas(600, 500);

  dotSpeed = random (1, 2);
  dot1 = new Dot(50, 250, 150, 50, dotSpeed)

  dotSpeed = random (1, 2);
  dot2 = new Dot(300, 150, 150, 150, dotSpeed)

  dotSpeed = random (1, 2);
  dot3 = new Dot(550, 200, 150, 100, dotSpeed)
}

function draw() {
  background(0);

  image (checkeredline, 0,-253)

  dot1.display();
  dot1.move();
  dot1.interact();


  dot2.display();
  dot2.move();
  dot2.interact();


  dot3.display();
  dot3.move();
  dot3.interact();

}

function Dot(dotXPos, dotSpeed){

  this.xPos = dotXPos;
  this.speed = dotSpeed;
  var yPos = height;

  this.display = function(){

    push();
    translate(this.xPos, yPos);
    stroke(255);
    circle(0,40, 40); 
    pop();

  };

  this.move = function() {
    
    yPos = yPos - this.speed;

  };

  this.interact = function(){

    if(mouseIsPressed){
      yPos = height
      this.speed = random (1, 2);
    }
  };
}
