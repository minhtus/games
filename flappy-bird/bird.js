const bird = function(game) {
    const context = game.context;
    const images = [];
    let currentImage = 0;
    let currentFrame = 0;

    const x = 40;
    let fallingSpeed = 0;
    const accelerator = 0.4;

    this.y = 100;
    this.flapRatio = 5;

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

    this.birdHitBox = () => x < game.pipe.x + 52 && x + 24 > game.pipe.x;

    const update = () => {
        if (game.gameState === 0 || game.gameState === 2) {
            return;
        }
        currentFrame++;
        if (currentFrame === 60) {
            currentFrame = 0;
        }

        if (currentFrame % this.flapRatio === 0) {
            animateBird();
        }

        if (this.y >= game.height - 112 - 24) {
            this.y = game.height - 112 - 24;
            game.gameState = 2;
            return;
        }
        if (this.y <0) {
            this.y = 0;
            fallingSpeed = 0;
        }
        fallingSpeed += accelerator;
        this.y += fallingSpeed;
    };

    function animateBird() {
        currentImage++;
        if (currentImage === 4) {
            currentImage = 0;
        }
    }

    this.resetBirdPosition = () => {
        this.y = 100;
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
