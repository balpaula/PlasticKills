function Obstacle(){
    this.x = Math.floor(Math.random()*361)+20;
    this.y = 630;
    this.intervalId = undefined;
    this.collision = false;
    this.type = this.createType();
}

Obstacle.prototype.start = function () {
    if (!this.intervalId) {
        this.intervalId = setInterval(this.move.bind(this), 50);
    }
}

Obstacle.prototype.clear = function () {
    if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = undefined;
    }
}

Obstacle.prototype.move = function () {
    //console.log('obstacle moving');
    this.y -= 5;
}

Obstacle.prototype.stop = function () {
    this.y = 0;
}

Obstacle.prototype.createType = function () {
    var num = Math.floor(Math.random()*5);
    if (num === 4){
        return ['star', 'yellow'];
    } else {
        return ['enemy', 'red'];
    }
}
