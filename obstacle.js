function Obstacle(){
    this.x = Math.floor(Math.random()*361)+20;
    this.y = 630;
    this.intervalId = undefined;
    this.collision = false;
    this.type = this.createType();
    this.image = new Image();
    this.image.src = this.type[2];
    this.image.width = 32;
    this.image.height = 70;
}

Obstacle.prototype.start = function () {
    if (!this.intervalId) {
        this.intervalId = setInterval(this.move.bind(this), 10);
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
    this.y -= 2;
}

Obstacle.prototype.stop = function () {
    this.y = 0;
}

Obstacle.prototype.createType = function () {
    var num = Math.floor(Math.random()*5);
    if (num === 4){
        return ['star', 'yellow', '../Media/groga.png'];
    } else {
        return ['enemy', 'red', this.randomPlasticItem()];
    }
}

Obstacle.prototype.randomPlasticItem = function () {
    var imagesArray = ['../Media/bottle.png','../Media/bag.png', '../Media/spoon.png'];
    return imagesArray[Math.floor(Math.random()*imagesArray.length)];
}