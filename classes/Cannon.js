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
                //for b
            }
            //sin x cos y
        }
    }

    draw() {
        //use velocity[2]
    }
}
