function random(){
    return Math.round(Math.random()) == 0 ? 1 : -1;
}

function restart(){
    ballObj.x = canvasSize.x/2
    ballObj.y = canvasSize.y/2
    
    ballObj.xV = random()
    ballObj.yV = random()
}

function mouseOut(){
     mouseObj.x = -10
     mouseObj.y = -10
}

