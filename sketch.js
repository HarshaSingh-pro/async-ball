
//create a ball
var ball;

function setup(){
    createCanvas(500,500);
   
   //given spirte to the ball
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
}

function draw(){
    background("white");
   
  //controlling ball using keys 
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    //lets  says ball.x=3
    //ball.x + x;  3+1=4
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
