function Game (options) {
    this.fish = options.fish;
    this.ctx = options.ctx;
    this.background = options.background;
    this.obstacles = [];
    this.gameOver = options.gameOver;
    this.score = 0;
    this.lives = 3;
    this.isEnded = false;
}

Game.prototype._drawBoard = function () {
//     this.ctx.fillStyle = '#3b3b3b';
//     this.ctx.fillRect(0,0,400,650);
}

Game.prototype._drawBackground = function () {
    this.background.newPosition();
    this.background.updateBackground();
}

Game.prototype._drawFish = function () {
    // this.ctx.fillStyle = 'green';
    // this.ctx.fillRect(this.fish.x-10, this.fish.y-10, 20, 20);
    this.ctx.drawImage(this.fish.image, this.fish.x-46, this.fish.y-54, 93, 109);
}

Game.prototype._drawObstacle = function () {
    this.obstacles.forEach( function(obstacle) {
        // this.ctx.fillStyle = obstacle.type[1];
        // this.ctx.fillRect(obstacle.x, obstacle.y, 20, 20);
        this.ctx.drawImage(obstacle.image, obstacle.x, obstacle.y, 32, 70);
        obstacle.start();
    }.bind(this));
}

Game.prototype._drawScore = function () {
    this.ctx.fillStyle='white';
    this.ctx.font ='14px sans-serif';
    this.ctx.fillText('Score: '+this.score,300,30);
}
   
Game.prototype._drawLives = function () {
    this.ctx.fillStyle = 'white';
    this.ctx.font = '14px sans-serif';
    this.ctx.fillText('Lives: '+this.lives,300,50);
}

Game.prototype.start = function () {
    this.ctx.canvas = document.getElementById('canvas');
    this.ctx.canvas.addEventListener('click', this.onCanvasClick.bind(this), false);
    this.intervalGame = window.requestAnimationFrame(this._update.bind(this));
    this._generateObstacle();
    this.intervalObstacle = setInterval(this._generateObstacle.bind(this), 1500);
}

Game.prototype.onCanvasClick = function (e) {
    var x = e.clientX - this.ctx.canvas.offsetLeft;
    var y = e.clientY - this.ctx.canvas.offsetTop;

    if (x < 200){
        this.fish.goLeft();
    } else {
        this.fish.goRight();
    }

    if (!this.isEnded){
        this.fish.start();
    }
}

Game.prototype._generateObstacle = function () {
    this.obstacles.push(new Obstacle());
}

// Game.prototype._removeObstacles = function () {
//     this.obstacles.forEach(function(obstacle, index) {
//         obstacle.stop();
//     }.bind(this));
// }

Game.prototype._checkObstacle = function () {
    this.obstacles.forEach(function(obstacle, index){
        if (obstacle.y < 0){
            obstacle.clear();
            this.obstacles.splice(index,1);
        }
    }.bind(this));
}

Game.prototype._collision = function () {
    this.obstacles.forEach(function(obstacle, index){
        var cornerTopLeft = [obstacle.x, obstacle.y];
        var cornerTopRight = [obstacle.x+32, obstacle.y];
        var cornerBottomLeft = [obstacle.x, obstacle.y+70];
        var cornerBottomRight = [obstacle.x+32, obstacle.y+70];

        var corners = [cornerTopLeft, cornerTopRight, cornerBottomLeft, cornerBottomRight];
        corners.forEach(function(corner){
            if (corner[0]  >=this.fish.x && corner[0] <= this.fish.x+47 && corner[1] >= this.fish.y && corner[1] <= this.fish.y+55){
                if (obstacle.collision === false){
                    obstacle.collision = true;
                    console.log(obstacle.type);
                    this.checkCollision(obstacle, index);
                } 
            }
        }.bind(this));
    }.bind(this))
}

Game.prototype.checkCollision = function (obstacle, index) {
    if (obstacle.type[0] === 'enemy'){
        this.removeLive();
    } else {
        this.score += 10;
    }
    obstacle.clear();
    this.obstacles.splice(index,1);
}

Game.prototype.removeLive = function () {
    this.lives -= 1;
}

// Game.prototype.end = function () {
//     clearInterval(this.intervalObstacle);
//     this.fish.stop();
//     this._removeObstacles();
//     //this.stop();
//     this.gameOver();
// }

Game.prototype.checkIfEnded = function () {
    if (this.lives === 0){
        this.isEnded = true;
    }
}

// Game.prototype.clearCanvas = function () {
//     this.ctx.clearRect(0,0,400,650);
// }

Game.prototype._update = function () {
    //this._drawBoard();
    this._drawBackground();
    this._drawFish();
    this._drawObstacle();
    this._drawScore();
    this._drawLives();
    this._checkObstacle();
    this._collision();
    this.checkIfEnded();
    

    if (!this.isEnded){
        this.intervalGame = window.requestAnimationFrame(this._update.bind(this));
    } else {
        this.fish.stop();
        setTimeout(this.gameOver, 750);
    }
    
}

