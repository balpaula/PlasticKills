function Fish () {
    this.x = 200;
    this.y = 200;
    this.direction = undefined;
    this.intervalId = undefined;
}

Fish.prototype.start = function () {
    console.log('fish start');
    this.move();
}

Fish.prototype.move = function () {
    console.log('move');
    if (!this.intervalId) {
        this.intervalId = setInterval(this._moveForward.bind(this), 25);
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

Fish.prototype.stop = function () {
    if ( this.intervalId ) {
        clearInterval(this.intervalId)
        this.intervalId = undefined;
    }
}