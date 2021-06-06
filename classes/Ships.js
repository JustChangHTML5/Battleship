//FIX ALOTTA STUFF
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