const game = function () {
    this.width = 288;
    this.height = 512;
    this.gameState = 0;
    this.speed = 2;
    this.score = 0;

    const canvas = document.getElementById('canvas');
    canvas.width = this.width;
    canvas.height = this.height;
    this.context = canvas.getContext('2d');
    let request = null;

    this.init = () => {
        this.background = new background(this);
        this.pipe = new pipe(this);
        this.bird = new bird(this);
        canvas.addEventListener('click', controlGame);

        loop();
    };

    const controlGame = () => {
        switch (this.gameState) {
            case 0:
                this.gameState = 1;
                break;
            case 1: this.bird.flap();
                break;
            case 2:
                this.bird.resetBirdPosition();
                this.pipe.reset();
                this.gameState = 0;
                break;
        }
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
                    console.log('Inside pipe');
                    // if (this.bird.y < this.pipe.upperHitBox() || this.bird.y > this.pipe.lowerHitBox()) {
                    //     console.log('Hit');
                    //     this.gameState = 2;
                    // }
                }
                drawInGame();
                break;
            case 2:
                drawEndGame();
                break;
        }
        request = requestAnimationFrame(loop);
    }
};

window.onload = () => {
    new game().init();
};

