const game = function () {
    this.width = 288;
    this.height = 512;
    this.gameState = 0;
    this.speed = 2;
    let score = 0;
    let highScore = 0;

    const canvas = document.getElementById('canvas');
    canvas.width = this.width;
    canvas.height = this.height;
    this.context = canvas.getContext('2d');
    const scoreElement = document.getElementById('score');
    const highScoreElement = document.getElementById('high-score');

    this.init = () => {
        this.background = new background(this);
        this.pipe = new pipe(this);
        this.bird = new bird(this);
        canvas.addEventListener('click', controlGame);

        loop();
    };

    this.goal = () => {
        score++;
        scoreElement.textContent = score;
    };

    this.gameOver = () => {
        this.gameState = 2;
        if (score > highScore) {
            highScore = score;
            highScoreElement.textContent = highScore;
        }
    };

    const controlGame = () => {
        switch (this.gameState) {
            case 0:
                this.bird.flapRatio = 5;
                this.gameState = 1;
                break;
            case 1: this.bird.flap();
                break;
            case 2:
                resetGame();
                this.gameState = 0;
                break;
        }
    };

    const resetGame = () => {
        this.bird.reset();
        this.pipe.reset();
        score = 0;
        scoreElement.textContent = score;
    };

    const drawStartGame = () => {
        this.background.drawStartGame();
        this.bird.draw();
    };

    const drawInGame = () => {
        this.background.drawInGame();
        this.pipe.draw();
        this.bird.draw();
    };

    const drawEndGame = () => {
        this.background.drawEndGame();
        this.bird.draw();
    };

    const loop = () => {
        switch (this.gameState) {
            case 0:
                drawStartGame();
                break;
            case 1:
                if (this.bird.birdHitBox()) {
                    if (this.bird.y < this.pipe.upperHitBox() || this.bird.y + 24 > this.pipe.lowerHitBox()) {
                        console.log('Hit');
                        this.gameOver();
                    }
                }
                drawInGame();
                break;
            case 2:
                drawEndGame();
                break;
        }
        requestAnimationFrame(loop);
    }
};

window.onload = () => {
    new game().init();
};

