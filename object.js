function Object(){
    this.x = Math.floor(Math.random()*361)+20;
    this.y = 630;
    this.intervalId = undefined;
}

Object.prototype.start = function () {
    if (!this.intervalId) {
        this.intervalId = setInterval(this.move.bind(this), 50);
    }
}

Object.prototype.move = function () {
    this.y -= 5;
}

