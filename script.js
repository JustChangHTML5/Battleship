var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var width = 100;
var height = 60;
var gridSize = 10;
var gravity = 1;
let game = new Ships();

canvas.width = width * gridSize;
canvas.height = height * gridSize;

function drawLine(color, x, y, x0, y0) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(x, y);
    ctx.lineTo(x0, y0);
    ctx.stroke();
}

function drawRect(color, x, y, width, height) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
    ctx.stroke();
}

class Bullet {
    //pos, velocity vecotor3
    //[2] height
    constructor(damage, pos, size, speed, cannon) {
        this.damage = damage;
        this.pos = pos;
        this.velocity = [0, 0, 0];
        this.size = size;
        this.speed = cannon.speed;
        this.cannon = cannon;
    }

    move() {
        this.pos[0] += this.velocity[0] * this.speed;
        this.pos[1] += this.velocity[1] * this.speed;
        this.pos[2] += this.velocity[2] * this.speed;
    }

    fire(velocity) {
        this.velocity = velocity;
        if (this.velocity[2] > 0) {
            this.move();
            this.velocity[2] -= this.gravity;
            return null;
        }

        else {
            return {
                x: Math.floor((this.pos[0] - 2) / gridSize) + 1,
                y: Math.floor((this.pos[1] - 2) / gridSize) + 1
            }
        }
    }

    draw() {
        //Use velocity[2]
    }
}

class Cannon {
    constructor(coordinates, color, blowRange, speed, canonRange, size, bulletSize, ammo, damage) {
        this.pos = coordinates;
        this.color = color;
        this.blowRange = blowRange;
        this.speed = speed;
        this.canonRange = canonRange;
        this.size = size;
        this.bulletSize = bulletSize;
        this.ammo = ammo;
        this.curBullet = null;
        this.damage = damage;
    }

    reload() {
        if (this.ammo > 0) {
            this.ammo -= 1;
            let curBulletUpdate = new Bullet(this.damage, [this.coordinates[0], this.coordinates[1], 0], this.bulletSize, this.speed, this);
            this.curBullet = curBulletUpdate;
        }
    }

    shoot(direction, angle, ) {
        if (this.curBullet === null) {
            var checkLanded = this.curBullet.fire([Math.sin(direction), Math.cos(direction)], Math.sin(angle));
            if (checkLanded === null) {
                for b
            }
            //sin x cos y
        }
    }

    draw() {
        //use velocity[2]
    }
}

class Battleship {
    constructor(coordinates, color, size, hp, speed) {
        this.pos = coordinates;
        this.color = color;
        this.size = size;
        this.hp = hp;
        this.speed = speed;
        this.cannons = [];
    }

    draw() {
        drawRect(this.color, this.pos[0] * gridSize, this.pos[1] * gridSize, this.size[0] * gridSize, this.size[1] * gridSize);
    }

    move(shiftX, shiftY) {
        this.pos[0] += shiftX;
        this.pos[1] += shiftY;
    }
}

function drawGrid() {
    for (var column = 1; column <= width; column++) {
        drawLine("black", column * gridSize, 0, column * gridSize, height * gridSize);
    }

    for (var row = 1; row <= height; row++) {
        drawLine("black", 0, row * gridSize, width * gridSize, row * gridSize);
    }
}

class Ships {
    constructor() {
        var battleships = [];
    }
}

drawGrid();

let newShip = new Battleship([10, 10], "black", [5, 5], 10, 1);

function main() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    newShip.draw();
    
    drawGrid();
}

setInterval(main, 10)

//already half way in