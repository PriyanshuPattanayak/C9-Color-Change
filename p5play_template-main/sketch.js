var magicBox;
function setup() {
  createCanvas(400,400);
  magicBox = createSprite(200,200,30,30)
  magicBox.visible = false
}

function draw() 
{
  background(30);
  if(keyIsDown(LEFT_ARROW)){
  background("blue")
  }
  if(keyIsDown(RIGHT_ARROW)){
  background("red")
  }
  if(keyIsDown(DOWN_ARROW)){
    background("green")
    }
  if(keyIsDown(UP_ARROW)){
      background("yellow")
      }
  drawSprites();
  
}




