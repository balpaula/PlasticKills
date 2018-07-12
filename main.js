window.onload = function (){
    buildSplash();
}

function buildSplash(){
    console.log('build splash');
    var startScreen = document.getElementById('start-screen');
    startScreen.style.background = "url('Media/animation-vertical.gif')";
    startScreen.style.backgroundRepeat = 'no-repeat';
    startScreen.style.backgroundSize = '400px 650px';
    startScreen.style.width = '400px';
    startScreen.style.height = '650px';

    var title = document.createElement('h1');
    title.className = 'main-title';
    title.style.fontSize = '80px';
    title.innerHTML = 'Plastic Kills';

    var startButton = document.createElement('button');
    startButton.className = 'button-start';
    startButton.innerHTML = 'Start';

    var infoButton = document.createElement('div');
    infoButton.className = 'info-icon';

    var instructions = document.createElement('p');
    instructions.className = 'instructions';
    instructions.innerHTML = '';

    startScreen.appendChild(title);
    startScreen.appendChild(startButton);
    startScreen.appendChild(infoButton);
    startScreen.appendChild(instructions);

    startButton.addEventListener('click', function(){
        destroySplash();
        buildGame();
    });

    infoButton.addEventListener('click', function(){
        if (instructions.innerHTML === ''){
            instructions.innerHTML = 'Touch left or right side of the screen to change the direction. Avoid plastic and collect stars.';
        } else {
            instructions.innerHTML = '';
        }
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
    finishScreen.style.background = "url('Media/Background.png')";
    finishScreen.style.backgroundRepeat = 'no-repeat';
    finishScreen.style.width = '400px';
    finishScreen.style.height = '650px';

    var canvas = document.createElement('canvas');
    canvas.id = 'canvas-game-over';
    canvas.width = 400;
    canvas.height = 650;

    finishScreen.appendChild(canvas);
    var ctx = canvas.getContext('2d');

    var background = new Background(ctx);

    drawBackground();

    function drawBackground() {
        background.newPosition();
        background.updateBackground();
        window.requestAnimationFrame(drawBackground.bind(this))
    }

    var finishElements = document.createElement('div');
    finishElements.id = 'finish-elements';

    finishScreen.appendChild(finishElements);

    var title = document.createElement('h1');
    title.className = 'game-over-title';
    title.innerHTML = 'Game over';

    var textScore = document.createElement('h3');
    textScore.className = 'score-text';
    textScore.innerHTML = 'Your score is';

    var score = document.createElement('h2');
    score.className = 'score';
    score.innerHTML = localStorage.getItem('score');

    var restartButton = document.createElement('button');
    restartButton.className = 'button-restart';
    restartButton.innerHTML = 'Try again';

    var factContainer = document.createElement('div');
    factContainer.className = 'fact-container';

    var fact = new Fact();
    var factText = document.createElement('h4');
    factText.className = 'fact-text';
    factText.innerHTML = fact.text;

    var sourceText = document.createElement('p');
    sourceText.className = 'source-text';
    sourceText.innerHTML = fact.source;

    var homeButton = document.createElement('div');
    homeButton.className = 'button-home';

    //finishElements.appendChild(title);
    finishElements.appendChild(textScore);
    finishElements.appendChild(score);
    finishElements.appendChild(factContainer);
    factContainer.appendChild(factText);
    factContainer.appendChild(sourceText);
    finishElements.appendChild(restartButton);
    finishElements.appendChild(homeButton);

    restartButton.addEventListener('click', function(){
        destroyGameOver();
        buildGame();
    });

    homeButton.addEventListener('click', function(){
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
