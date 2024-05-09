var canvas = document.getElementById("canvas");
var ball = canvas.getContext("2d");

const canvasSize = {x: 600, y: 600}
const ballObj = {x: 0, y: 0, xV: 1, yV: 1, size: 10}

canvas.width = canvasSize.x
canvas.height = canvasSize.y

ball.fillStyle = "green";

(function drawCanvas(){
    ball.clearRect(0, 0, canvasSize.x, canvasSize.y)

    ballObj.x += ballObj.xV
    ballObj.y += ballObj.yV

    ball.fillRect(ballObj.x, ballObj.y, ballObj.size, ballObj.size);

    if( ballObj.x < 0 || ballObj.x > canvasSize.x - ballObj.size ){
        ballObj.xV = -ballObj.xV
    }
    if(  ballObj.y < 0 || ballObj.y > canvasSize.y - ballObj.size){
        ballObj.yV = -ballObj.yV
    }

    requestAnimationFrame(drawCanvas)
}())