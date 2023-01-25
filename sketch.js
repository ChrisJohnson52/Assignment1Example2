/*
Christian-Thomas Dougas De Guzman Johnson
CSC 2463
Drawing With P5
*/

//Example 2
function setup() 
{
  createCanvas(1000, 1000);
}
  
function draw() 
{
  background(255);
  noStroke();
  //Red Circle
  fill(360, 100, 100, 150);
  ellipse(220, 135, 200, 200);
  //Blue Circle
  fill(100, 100, 360, 150);
  ellipse(165, 250, 200, 200);
  //Green Circle
  fill(100, 360, 100, 150);
  ellipse(285, 250, 200, 200);
}