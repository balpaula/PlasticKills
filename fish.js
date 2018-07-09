function Fish () {
    this.x = 200;
    this.y = 200;
    this.direction = 'left';
    this.intervalId = undefined;

}

Fish.prototype.start = function () {
    console.log('fish start');
    this.move();
}

Fish.prototype.move = function () {
    console.log('move');
    if (!this.intervalId) {
        this.intervalId = setInterval(this._moveForward.bind(this), 100);
    }
}

Fish.prototype._moveForward = function () {
    console.log('move forward');
    if (this.direction === 'right'){
        this.goRight();
    } else {
        this.goLeft();
    }
}

Fish.prototype.goLeft = function () {
    if (this.x > 20){
        this.x-=5;
    } else {
        this.direction = 'right';
    }
}

Fish.prototype.goRight = function () {
    if (this.x < 380){
        this.x+=5;
    } else {
        this.direction = 'left';
    }
}

Fish.prototype.collidesWith = function () {}

Fish.prototype.stop = function () {}