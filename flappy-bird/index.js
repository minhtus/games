const game = function () {
    this.width = 288;
    this.height = 512;

    const canvas = document.getElementById('canvas');
    canvas.width = this.width;
    canvas.height = this.height;
    this.context = canvas.getContext('2d');

    this.init = () => {
        this.background = new background(this);
        this.background.init();
        this.bird = new bird(this);
        this.bird.init();

        loop();
    };

    const draw = () => {
        this.background.draw();
        this.bird.draw();
    };

    function loop() {
        draw();
        requestAnimationFrame(loop);
    }
};

window.onload = () => {
    new game().init();
};

