var bg,tom,jery;
function preload() {
    //load the images here
    bg = loadImage("images/garden.png");
    tomImg1 = loadAnimation("images/cat1.png");
    jeryImg1 = loadAnimation("image/mouse1.png");
    tomImg2 = loadAnimation("image/cat2.png,image/cat3.png");
    jeryImg2 = loadAnimation("image/mouse2.png,image/mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide

    if(tom.x - jery.x <(tom.width - jery.width)/2){
        tom.shapeColour = "images/cat4.png";
        jery.shapeColour = "images/mouse4.png"
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyPressed === RIGHT_ARROW){
    jery.addAnimation("teasing tom" ,jeryImg2);
    jery.changeAnimation("teasing tom");
    jery.frameDelay = 25;
  }
  if(keyPressed === LEFT_ARROW){
      jery.addAnimation("teasing tom" ,jeryImg2);
      jery.changeAnimation("teasing tom");
      jery.frameDelay = 25;
  }

  }
