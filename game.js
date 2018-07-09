function Game (options) {
    this.fish = options.fish;
    this.ctx = options.ctx;
    this.obstacles = [];
}

Game.prototype._drawBoard = function () {
    this.ctx.fillStyle = '#3b3b3b';
    this.ctx.fillRect(0,0,400,650);
    
}

Game.prototype._drawFish = function () {
    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(this.fish.x-10, this.fish.y-10, 20, 20);
}

Game.prototype._drawObstacle = function () {
    this.ctx.fillStyle = 'red';
    this.obstacles.forEach( function(obstacle) {
        this.ctx.fillRect(obstacle.x, obstacle.y, 20, 20);
        obstacle.start();
    }.bind(this));
}

Game.prototype.start = function () {
    this.ctx.canvas = document.getElementById('canvas');
    this.ctx.canvas.addEventListener('click', this.on_canvas_click.bind(this), false);
    this.intervalGame = window.requestAnimationFrame(this._update.bind(this));
    this._generateObstacle();
    this.intervalObstacle = setInterval(this._generateObstacle.bind(this), 1500);
}

Game.prototype.on_canvas_click = function (e) {
    var x = e.clientX - this.ctx.canvas.offsetLeft;
    var y = e.clientY - this.ctx.canvas.offsetTop;

    if (x < 200){
        this.fish.direction = 'left';
    } else {
        this.fish.direction = 'right';
    }

    this.fish.start();
}

Game.prototype.assignControlToTouchEvents = function () {}

Game.prototype._generateObstacle = function () {
    this.obstacles.push(new Obstacle());
    console.log(this.obstacles);
}

Game.prototype._checkObstacle = function () {
    this.obstacles.forEach(function(obstacle, index){
        if (obstacle.y < 0){
            this.obstacles.splice(index,1);
        }
    }.bind(this));
}

Game.prototype._update = function () {
    this._drawBoard();
    this._drawFish();
    this._drawObstacle();
    this._checkObstacle();
    this.intervalGame = window.requestAnimationFrame(this._update.bind(this));
}

Game.prototype.stop = function () {}