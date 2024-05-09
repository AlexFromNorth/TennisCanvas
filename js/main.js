const canvas = document.getElementById("canvas");
const restartBtn = document.querySelector('.restart')
const addedBalls_btn = document.querySelector('.addedBalls_btn')

const ball = canvas.getContext("2d");

// added any balls
function addedBalls(number){
    for(let i = 0; i < number; i++){
        ballObj.push({x: canvasSize.x/2, y: canvasSize.y/2, xV: random(), yV: random(), size: 10})
    }
}
//added btn
addedBalls_btn.addEventListener('click', ()=>{
    const addedBalls_input = document.querySelector('.addedBalls_input').value
    addedBalls(+addedBalls_input)
})

// click to restart btn
restartBtn.addEventListener('click',()=>restart())

// default params
const canvasSize = {x: 600, y: 600}
let ballObj = [{x: canvasSize.x/2, y: canvasSize.y/2, xV: random(), yV: random(), size: 10}]
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

    ballObj.forEach((e,i)=>{

        ballObj[i].x += ballObj[i].xV
        ballObj[i].y += ballObj[i].yV
    
        ball.fillRect(ballObj[i].x, ballObj[i].y, ballObj[i].size, ballObj[i].size);
    
        // ball move
        if( ballObj[i].x <= 0 || ballObj[i].x >= canvasSize.x - ballObj[i].size ){
            ballObj[i].xV = -ballObj[i].xV
        }
        if( ballObj[i].y <= 0 || ballObj[i].y >= canvasSize.y - ballObj[i].size){
            ballObj[i].yV = -ballObj[i].yV
        }
        
        // hovered mouse to the ball
        if(mouseObj.x >= ballObj[i].x && mouseObj.x <= ballObj[i].x + ballObj[i].size && mouseObj.y >= ballObj[i].y && mouseObj.y <= ballObj[i].y + ballObj[i].size){
            ballObj[i].xV = (ballObj[i].xV + mouseObj.xV/2)/2
            ballObj[i].yV = (ballObj[i].yV + mouseObj.yV/2)/2
        } 
    })

    requestAnimationFrame(drawCanvas)
}())