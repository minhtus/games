const bird = function (game) {
    const context = game.context;
    const images = [];
    const birdHeight = 24;
    const birdWidth = 34;
    let currentImage = 0;
    let frames = 0;

    const x = 40;
    let fallingSpeed = 0;
    const accelerator = 0.4;

    this.y = 100;
    this.flapRatio = 10;

    loadImages();

    function loadImages() {
        const mid = new Image();
        const up = new Image();
        const down = new Image();
        mid.src = './assets/yellowbird-midflap.png';
        up.src = './assets/yellowbird-upflap.png';
        down.src = './assets/yellowbird-downflap.png';
        up.onload = () => {
            images[0] = up;
        };
        mid.onload = () => {
            images[1] = mid;
            images[3] = mid;
        };
        down.onload = () => {
            images[2] = down;
        };
    }

    this.birdHitBox = () => {
        if (game.pipe.pipes.length > 1) {
            const pipe0 = game.pipe.pipes[0].x;
            const pipe1 = game.pipe.pipes[1].x;
                if (pipe0 + 52 < 0) {
                    game.pipe.pipes.shift();
                } else if (pipe0 + 52 < x && pipe0 + 52 >= x - game.speed) {
                    game.score++;
                    console.log(`Score: ${game.score}`);
                }

            if (x < pipe0 + 52 && x + birdWidth > pipe0) {
                if (pipe0 + 52 < x) {
                    return x < pipe1 + 52 && x + birdWidth > pipe1;
                } else {
                    return true;
                }
            }
        } else {
            return false;
        }
    };

    const update = () => {
        if (game.gameState === 2) {
            return;
        }
        frames++;
        if (frames === 60) {
            frames = 0;
        }

        if (frames % this.flapRatio === 0) {
            animateBird();
        }

        if (game.gameState === 1) {
            if (this.y >= game.height - 112 - birdHeight) {
                this.y = game.height - 112 - birdHeight;
                game.gameState = 2;
                return;
            }
            if (this.y < 0) {
                this.y = 0;
                fallingSpeed = 0;
            }
            fallingSpeed += accelerator;
            this.y += fallingSpeed;
        }
    };

    function animateBird() {
        currentImage++;
        if (currentImage === 4) {
            currentImage = 0;
        }
    }

    this.reset = () => {
        this.y = 100;
        this.flapRatio = 10;
        fallingSpeed = 0;
    };

    this.draw = () => {
        update();
        if (images.length < 4)
            return;
        context.drawImage(images[currentImage], x, this.y);
    };

    this.flap = () => {
        fallingSpeed = -7.5
    }

};
