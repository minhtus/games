const bird = function(game) {
    this.context = game.context;
    const images = [];
    let currentImage = 0;
    let currentFrame = 0;

    let y = 80;
    let speed = 0;
    let accelerator = 0.05;

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

    function update () {
        currentFrame++;
        if (currentFrame === 60) {
            currentFrame = 0;
        }

        if (currentFrame % 15 === 0) {
            animateBird();
        }

        if (y >= game.height - 112 - 24) {
            y = game.height - 112 - 24;
            return;
        }
        speed+=accelerator;
        y+=speed;
    }

    function animateBird() {
        currentImage++;
        if (currentImage === 4) {
            currentImage = 0;
        }
    }

    this.draw = () => {
        update();
        if (images.length < 4)
            return;
        this.context.drawImage(images[currentImage], 40, y);
    };

};
