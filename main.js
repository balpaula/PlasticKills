window.onload = function (){
    buildSplash();
}

function buildSplash(){
    console.log('build splash');
    var startScreen = document.getElementById('start-screen');
    startScreen.style.background = "url('../Media/animation-vertical.gif')";
    startScreen.style.backgroundRepeat = 'no-repeat';
    startScreen.style.backgroundSize = '400px 650px';
    startScreen.style.width = '400px';
    startScreen.style.height = '650px';


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
    startScreen.style.background = 'none';
    startScreen.style.width = '0px';
    startScreen.style.height = '0px';
}

function buildGame(){
    console.log('build game');
    var playScreen = document.getElementById('play-screen');
    playScreen.style.width = '400px';
    playScreen.style.height = '650px';

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
    playScreen.style.width = '0px';
    playScreen.style.height = '0px';
    buildGameOver();
}

function buildGameOver(){
    console.log('build game over');
    var finishScreen = document.getElementById('finish-screen');
    finishScreen.style.width = '400px';
    finishScreen.style.height = '650px';

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
    finishScreen.style.width = '0px';
    finishScreen.style.height = '0px';
}
