window.onload = function (){
    buildSplash();
}

function buildSplash(){
    console.log('build splash');
    var startScreen = document.getElementById('start-screen');

    var title = document.createElement('h1');
    title.innerHTML = 'Plastic Kills';

    var startButton = document.createElement('button');
    startButton.innerHTML = 'Start';

    startScreen.appendChild(title);
    startScreen.appendChild(startButton);

    startButton.addEventListener('click', function(){
        destroySplash();
        buildGame();
    });
}

function destroySplash(){
    console.log('destroy splash');
    var startScreen = document.getElementById('start-screen');
    while (startScreen.firstChild) {
        startScreen.removeChild(startScreen.firstChild);
    }
}

function buildGame(){
    console.log('build game');
    var playScreen = document.getElementById('play-screen');

    var canvas = document.createElement('canvas');
    canvas.id = 'my-canvas';
    canvas.width = 400;
    canvas.height = 650;
    console.log(canvas);

    playScreen.appendChild(canvas);

    var ctx = canvas.getContext('2d');

    //ctx.fillStyle = '#3b3b3b';
    //ctx.fillRect(0,0,400,650);

    game = new Game({
        fish: new Fish(),
        background: new Background(ctx),
        ctx: ctx,
        canvas: canvas,
        gameOver: destroyGame,
    });

    game.start();
    
}

function destroyGame(){
    console.log('destroy game');
    var playScreen = document.getElementById('play-screen');
    while (playScreen.firstChild) {
        playScreen.removeChild(playScreen.firstChild);
    }
    buildGameOver();
}

function buildGameOver(){
    console.log('build game over');
    var finishScreen = document.getElementById('finish-screen');

    var title = document.createElement('h1');
    title.innerHTML = 'Game over';

    var restartButton = document.createElement('button');
    restartButton.innerHTML = 'Try again';

    finishScreen.appendChild(title);
    finishScreen.appendChild(restartButton);

    restartButton.addEventListener('click', function(){
        destroyGameOver();
        buildSplash();
    });
}

function destroyGameOver(){
    console.log('destroy game over');
    var finishScreen = document.getElementById('finish-screen');
    while (finishScreen.firstChild) {
        finishScreen.removeChild(finishScreen.firstChild);
    }
}
