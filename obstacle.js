function Obstacle(){
    this.x = Math.floor(Math.random()*361)+20;
    this.y = 630;
    this.intervalId = undefined;
    this.collision = false;
    // this.type = this.createType();
    this.image = new Image();
    // this.image.src = this.type[2];
    // this.image.width = 32;
    // this.image.height = 70;
    // Refactor:
    this.type = undefined;
    this.image.src = undefined;
    this.image.width = undefined;
    this.image.height = undefined;
}

Obstacle.prototype.start = function () {
    if (!this.intervalId) {
        this.intervalId = setInterval(this.move.bind(this), 6);
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

// Obstacle.prototype.createType = function () {
//     var num = Math.floor(Math.random()*5);
//     if (num === 4){
//         return ['star', 'yellow', '../Media/groga.png'];
//     } else {
//         return ['enemy', 'red', this.randomPlasticItem()];
//     }
// }

// Obstacle.prototype.randomPlasticItem = function () {
//     var imagesArray = ['../Media/bottle.png','../Media/bag.png', '../Media/spoon.png'];
//     return imagesArray[Math.floor(Math.random()*imagesArray.length)];
// }

// Refactor

function PlasticItem () {
    Obstacle.call(this);
    this.type = 'plasticItem';
    this.image.src = this.randomPlasticItem();
    this.image.width = 32;
    this.image.height = 70;
}

PlasticItem.prototype = Object.create(Obstacle.prototype);

PlasticItem.prototype.randomPlasticItem = function () {
    var imagesArray = ['Media/bottle.png','Media/bag.png', 'Media/spoon.png'];
    return imagesArray[Math.floor(Math.random()*imagesArray.length)];
}

function Star (){
    Obstacle.call(this);
    this.type = 'star';
    this.image.src = this.randomStarColor();
    this.image.width = 30;
    this.image.height = 30;
}

Star.prototype = Object.create(Obstacle.prototype);

Star.prototype.randomStarColor = function () {
    var imagesArray = ['Media/star-little.png'];
    return imagesArray[Math.floor(Math.random()*imagesArray.length)];
}