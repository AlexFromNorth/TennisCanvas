var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

const ball = {x: 0, y: 0}

ctx.fillStyle = "green";
// ctx.fillRect(10, 10, 100, 100);


(function drawCanvas(){
    ctx.clearRect(0, 0, 500, 500)

    ball.x++
    ball.y++

    ctx.fillRect(ball.x, ball.y, 10, 10);

    requestAnimationFrame(drawCanvas)
}())