function Game (options) {
    this.fish = options.fish;
    this.ctx = options.ctx;
    this.objects = [];
}

Game.prototype._drawBoard = function () {
    this.ctx.fillStyle = '#3b3b3b';
    this.ctx.fillRect(0,0,400,650);
    if (this.object) {
        this._drawObject();
    }
}

Game.prototype._drawFish = function () {
    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(this.fish.x-10, this.fish.y-10, 20, 20);
}

Game.prototype._drawObject = function () {
    this.ctx.fillStyle = 'red';
    this.objects.forEach( function(object) {
        this.ctx.fillRect(object.x, object.y, 20, 20);
        object.start();
    }.bind(this));
}

Game.prototype.start = function () {
    this.ctx.canvas = document.getElementById('canvas');
    this.ctx.canvas.addEventListener('click', this.on_canvas_click.bind(this), false);
    this.intervalGame = window.requestAnimationFrame(this._update.bind(this));
    this._generateObject();
    this.intervalObject = setInterval(this._generateObject.bind(this), 3000);
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

Game.prototype._generateObject = function () {
    this.objects.push(new Object());
}

Game.prototype._update = function () {
    this._drawBoard();
    this._drawFish();
    this._drawObject();
    this.intervalGame = window.requestAnimationFrame(this._update.bind(this));
}

Game.prototype.stop = function () {}