const pipe = function (game) {
    const context = game.context;
    const space = 120;
    this.x = 288;
    const pipeUp = new Image();
    pipeUp.src = './assets/pipe-green-up.png';
    const pipeDown = new Image();
    pipeDown.src = './assets/pipe-green-down.png';
    let upper;
    let lower;

    const update = () => {
        if (this.x < -52) {
            this.x = 288;
            calcHeight();
        }
        this.x--
    };

    const calcHeight = () => {
        upper = Math.floor(Math.random()*200 +30);
        lower = 400 - space - upper;
    };

    this.resetPipePosition = () => {
        this.x = 288;
    };

    this.draw = () => {
        update();
        context.drawImage(pipeDown, 0, 320 - upper, 52, upper, this.x, 0, 52, upper);
        context.drawImage(pipeUp, 0, 0, 52, lower, this.x, game.height - 112 - lower, 52, lower);
    };


};