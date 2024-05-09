const canvas = document.getElementById("canvas");
const restartBtn = document.querySelector('.restart')
const ball = canvas.getContext("2d");

function restart(){
    ballObj.x = canvasSize.x/2
    ballObj.y = canvasSize.y/2
    
    ballObj.xV = 1
    ballObj.yV = 1
}
function mouseOut(){
     mouseObj.x = -10
     mouseObj.y = -10
}

// click to restart btn
restartBtn.addEventListener('click',()=>restart())

// default params
const canvasSize = {x: 600, y: 600}
const ballObj = {x: canvasSize.x/2, y: canvasSize.y/2, xV: 1, yV: 1, size: 10}
const mouseObj = {x : 0, y : 0, xV : 0, yV : 0}

canvas.width = canvasSize.x
canvas.height = canvasSize.y

ball.fillStyle = "green";

// hovered mouse to the ball
canvas.addEventListener('mousemove',(e)=>{
    mouseObj.x = e.offsetX
    mouseObj.xV = e.movementX
    
    mouseObj.y = e.offsetY
    mouseObj.yV = e.movementY
})

canvas.addEventListener('mouseout',(e)=>{
    mouseOut()
})

// ball move
(function drawCanvas(){
    ball.clearRect(0, 0, canvasSize.x, canvasSize.y)

    ballObj.x += ballObj.xV
    ballObj.y += ballObj.yV

    ball.fillRect(ballObj.x, ballObj.y, ballObj.size, ballObj.size);

    // ball move
    if( ballObj.x <= 0 || ballObj.x >= canvasSize.x - ballObj.size ){
        ballObj.xV = -ballObj.xV
    }
    if( ballObj.y <= 0 || ballObj.y >= canvasSize.y - ballObj.size){
        ballObj.yV = -ballObj.yV
    }
    
    // hovered mouse to the ball
    if(mouseObj.x >= ballObj.x && mouseObj.x <= ballObj.x + ballObj.size && mouseObj.y >= ballObj.y && mouseObj.y <= ballObj.y + ballObj.size){
        ballObj.xV = (ballObj.xV + mouseObj.xV/2)/2
        ballObj.yV = (ballObj.yV + mouseObj.yV/2)/2
    } 


    requestAnimationFrame(drawCanvas)
}())