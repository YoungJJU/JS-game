

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

function render(){
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(spaceshipImage, spaceshipX, spaceshipY, 64, 64);
}
function main(){
    render();
    requestAnimationFrame(main);
}


loadImage();
main();