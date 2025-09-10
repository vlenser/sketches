//custom variable for x coordinate of cloud
let cloudOneX = 50;

//custom variable for shooting stars
let lineXone = 0;
let lineYone = 0;

function setup() {
  createCanvas(600, 500);
}

function draw() {
  
  background('navy');
  
  frameRate(7)
 
  //shooting star
stroke("yellow");
  strokeWeight(1)
line(lineXone, lineYone, lineXone + 60, lineYone - 60);

  //set random red green and blue values
 r = random(0, 255);
 g = random(0, 255);
 b = random(0, 255);
     
  fill(300, 110, 43);
  stroke(r,g,b);
  strokeWeight(20 - frameCount % 20);//thick outline
  circle(500,500,200); //red
  

  fill("white");
  textSize(12)
  text('hi', pmouseX, pmouseY);
  
  fill(122, 300, 300);
  textSize(10)
  text("❤️", 295 - frameCount , 280);

  
  //displays the x and y position of the mouse on the canvas
  //noStroke()
//fill(255) //white text
 // textSize(12)
//text(`${mouseX}, ${mouseY}`, 20, 20);
  
  //moon
  noStroke()
  fill("white");
  circle (450, 100, 100);
  
    //overlapping navy circle for crescent moon
  stroke (frameCount%length)
  stroke("navy");   
  fill("navy");
  circle(400,75,100);
  
  //mountains
  noStroke()
  fill ("black")
  triangle(-40,500,100,200,300,500);
  triangle(150, 500,300,300, 500,500)
  
  //clouds
  stroke(-0)
  strokeWeight(0)
fill(100, 100, 400);
ellipse(cloudOneX, 50, 80, 30);
  
  
//clouds
  
  stroke(-0)
  strokeWeight(0)
fill(100, 100, 400);
ellipse(cloudOneX+300, 150, 200, 20);
ellipse(cloudOneX+150, 90, 100, 30);
ellipse(cloudOneX+350, 100, 120, 20);
ellipse(cloudOneX+400, 110, 120, 20);
  
  //sets the x coordinate to the frame count
//resets at left edge
cloudOneX =  frameCount % width;

  
  //set shooting star to random location
lineXone = random(0, width);
lineYone = random(0, height/2);
  

}