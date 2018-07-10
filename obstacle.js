function Obstacle(){
    this.x = Math.floor(Math.random()*361)+20;
    this.y = 630;
    this.intervalId = undefined;
    this.collision = false;
}

Obstacle.prototype.start = function () {
    if (!this.intervalId) {
        this.intervalId = setInterval(this.move.bind(this), 50);
    }
}

Obstacle.prototype.clear = function () {
    if (this.intervalId) {
        clearInterval(this.intervalId);
    }
}

Obstacle.prototype.move = function () {
    this.y -= 5;
}

