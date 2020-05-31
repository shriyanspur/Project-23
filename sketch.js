var heli, heliImg;
var box, boxImg;
var backImg;
var zone1, zone2, zone3;
var zone1Img, zone2Img, zone3Img;
var zone1Col, zone3Col;
var keyCode = 0;

function preload() {
  heliImg = loadImage("heli.png");

  boxImg = loadImage("box.png");

  backImg = loadImage("back.png");

  zone1Img = loadImage("zone1.png");
  zone2Img = loadImage("zone2.png");
  zone3Img = loadImage("zone3.png");
}

function setup() {
  createCanvas(1400,500);

  heli = createSprite(50,50,100,50);
  heli.addImage(heliImg);
  heli.scale = 0.3;
  heli.velocityX = 5;

  box = createSprite(80,50,60,50);
  box.addImage(boxImg);
  box.scale = 0.13;
  box.velocityX = 5;
  box.visible = false;

  zone1 = createSprite(631,460,10,100);
  zone1.addImage(zone1Img);

  zone2 = createSprite(720,490,300,20);
  zone2.addImage(zone2Img);

  zone3 = createSprite(812,460,20,100);
  zone3.addImage(zone3Img);
}

function draw() {
  background(backImg);


  heli.display();
  zone2.display();
  zone1.display();
  zone3.display();
  box.display();

  console.log(mouseX);
  console.log(mouseY);

  if (keyCode === DOWN_ARROW) {
    box.visible = true;
    box.velocityX = 0;
    box.y = box.y+7;
    
  
    if (box.collide(zone1)) {
      box.x = 660;
      box.y = 466;
    }

    if (box.collide(zone2)) {
      box.y = 466;
    }

    if (box.collide(zone3)) {
      box.x = 780;
      box.y = 466;
    }
  }
}