

let canvas;
let ctx;
canvas = document.createElement("canvas");
ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 700;
document.body.appendChild(canvas);

let spaceshipX = canvas.width/2 - 32;
let spaceshipY = canvas.height - 64;

let bulletList = [];
function Bullet(){
    this.x = 0;
    this.y = 0;
    this.init = function(){
        this.x = spaceshipX;
        this.y = spaceshipY - 18;
        this.x1 = spaceshipX + 32;
        this.y1 = spaceshipY - 27;

        bulletList.push(this);
    };
    this.update = function(){
        this.y -= 7;
        this.y1 -= 7;
    };
}

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

        if(event.keyCode == 65){
            createBullet();
        }
    });
}

function createBullet(){
    let b = new Bullet();
    b.init();
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

    for(let i = 0; i<bulletList.length;i++){
        bulletList[i].update();
    }
}

function render(){
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(spaceshipImage, spaceshipX, spaceshipY, 64, 64);

    for(let i = 0; i < bulletList.length; i++){
        ctx.drawImage(bulletImage,bulletList[i].x, bulletList[i].y, 15, 30);
        ctx.drawImage(bulletImage,bulletList[i].x1, bulletList[i].y1,15, 30);
    }
}
function main(){
    update();
    render();
    requestAnimationFrame(main);
}


loadImage();
setupKeyboardListener();
main();