const bird = function(game) {
    this.context = game.context;
    const images = [];
    let currentImage = 0;
    let currentFrame = 0;

    function loadImages() {
        const mid = new Image();
        const up = new Image();
        const down = new Image();
        mid.src = './assets/yellowbird-midflap.png';
        up.src = './assets/yellowbird-upflap.png';
        down.src = './assets/yellowbird-downflap.png';
        mid.onload = () => {
            images.push(mid);
        };
        up.onload = () => {
            images.push(up);
        };
        down.onload = () => {
            images.push(down);
        };
    }

    function update () {
        if (currentImage === 2) {
            currentImage = 0
        }
        currentFrame++;

    }

    this.init = () => {
        loadImages();
    };

    this.draw = () => {
        update();
        if (images.length < 3)
            return;
        this.context.drawImage(images[currentImage], 40, 80);
    };

};
