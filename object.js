function Object(){
    this.x = Math.floor(Math.random()*361)+20;
    this.y = 30;
    this.intervalId = undefined;
}

Object.prototype.move = function () {
    this.y += 5;
}

