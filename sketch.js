var card1
var card2
var card3
var card4
var card5
var card6
var card7
var card8
var card9
var card10
var main_card

function setup() {
  createCanvas(300,530);
  card1 = createSprite(50, 50, 40, 60)
  card2 = createSprite(100, 50, 40, 60)
  card3 = createSprite(150, 50, 40, 60)
  card4 = createSprite(200, 50, 40, 60)
  card5 = createSprite(250, 50, 40, 60)
  card6 = createSprite(50, 120, 40, 60)
  card7 = createSprite(100, 120, 40, 60)
  card8 = createSprite(150, 120, 40, 60)
  card9 = createSprite(200, 120, 40, 60)
  card10 = createSprite(250, 120, 40, 60)
  main_card = createSprite(70, 435, 60, 90)

}

function draw() 
{
  background('#eccf8d');
  noStroke();
  fill('#bb8138')
  rect(10, 370, 280, 150);
  fill('black')
  text('xx/xx/xxxx', 42, 490)
  text('xx/xx/xxxx', 42, 500)
  drawSprites();
}




