var fixedRect, movingRect;

function setup() 
{
 createCanvas(1400,800);

 fixedRect = createSprite(400,400,50,80);
 fixedRect.shapeColor = "cyan";

 movingRect = createSprite(900,400,80,30);
 movingRect.shapeColor = "cyan";

 fixedRect.velocityX = 5;
 movingRect.velocityX = -5;

}

function draw()
{
 background(0,0,0);

 bounceOff(movingRect , fixedRect);

 drawSprites();
}



