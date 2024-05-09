function random(){
    return Math.round(Math.random()) == 0 ? 1 * Math.random() : -1 * Math.random();
}

function restart(){
    ballObj = ballObj.slice(0,1)
    ballObj[0].x = canvasSize.x/2
    ballObj[0].y = canvasSize.y/2
    
    ballObj[0].xV = random()
    ballObj[0].yV = random()
}

function mouseOut(){
     mouseObj.x = -10
     mouseObj.y = -10
}

