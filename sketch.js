var moving,fixed;

function setup() {
  createCanvas(800,400);
 moving= createSprite(50, 50, 150, 100);
  fixed=createSprite(50,50,20,20)
}

function draw() {
  background(255,255,255);  

 if( check(moving,fixed)){
  moving.shapeColor="pink";
  fixed.shapeColor="pink"; 
 }
 else{
  moving.shapeColor="blue";
  fixed.shapeColor="blue"; 
 }

  if (keyDown("up")){
    moving.velocityX=0;
    moving.velocityY=-4;
  }
  else if (keyDown("down")){
    moving.velocityX=0;
    moving.velocityY=4;
  }
  else if (keyDown("right")){
    moving.velocityX=2;
    moving.velocityY=0;
  }
  else if (keyDown("left")){
    moving.velocityX=-2;
    moving.velocityY=0;
  }
  else{

      moving.velocityX=0;
      moving.velocityY=0;
  
  }


  drawSprites();
}
function check (moving,fixed){


 var movingXStart=moving.x-moving.width/2;
  var movingXEnd=moving.x+moving.width/2;
  var fixedXStart=fixed.x-fixed.width/2;
  var fixedXEnd=fixed.x+fixed.width/2;
  
  
 var movingYStart=moving.y-moving.width/2;
 var movingYEnd=moving.y+moving.width/2;
 var fixedYStart=fixed.y-fixed.width/2;
 var fixedYEnd=fixed.y+fixed.width/2;
  
  if(movingXEnd>fixedXStart&& movingXStart<fixedXEnd&& movingYEnd>fixedYStart&& movingYStart<fixedYEnd){
    return true;
}
else{
  return false;

}


}