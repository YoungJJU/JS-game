

let canvas;
let ctx;
canvas = document.createElement("canvas");
ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 700;
document.body.appendChild(canvas);

let spaceshipX = canvas.width/2 - 32;
let spaceshipY = canvas.height - 64;

let backgroundImage, spaceshipImage,bulletImage,enemyImage, obstacleImage
function loadImage(){
    backgroundImage = new Image();
    backgroundImage.src = "images/background.png";

    spaceshipImage = new Image();
    spaceshipImage.src = "images/spaceship.png";

    bulletImage = new Image();
    bulletImage.src = "images/bullet.png";

    enemyImage = new Image();
    enemyImage.src = "images/enemy.jpg";

    obstacleImage = new Image();
    obstacleImage.src = "images/obstacle.png";
}

let keysDown = {}
function setupKeyboardListener(){
    document.addEventListener("keydown", function(event){
        keysDown[event.keyCode] = true;
    
    });
    document.addEventListener('keyup',function(){
        delete keysDown[event.keyCode];
    })
}

function update(){
    if (39 in keysDown){
        spaceshipX += 5;
    }
    if (37 in keysDown){
        spaceshipX -= 5;
    }
    if (38 in keysDown){
        spaceshipY -= 5;
    }
    if (40 in keysDown){
        spaceshipY += 5;
    }
    if(spaceshipX <= 0){
        spaceshipX = 0;
    }
    if(spaceshipX >= canvas.width - 64){
        spaceshipX = canvas.width -64;
    }
    if(spaceshipY <= 0){
        spaceshipY = 0;
    }
    if(spaceshipY >= canvas.height - 64){
        spaceshipY = canvas.height - 64;
    }
}

function render(){
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(spaceshipImage, spaceshipX, spaceshipY, 64, 64);
}
function main(){
    update();
    render();
    requestAnimationFrame(main);
}


loadImage();
setupKeyboardListener();
main();