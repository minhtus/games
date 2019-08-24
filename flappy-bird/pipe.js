const pipe = function (game) {
    const context = game.context;
    const pipeUp = new Image();
    pipeUp.src = './assets/pipe-green-up.png';
    const pipeDown = new Image();
    pipeDown.src = './assets/pipe-green-down.png';
    this.pipes = [];

    let frames = 0;
    const gap = 120;
    const between = 80;
    const width = 52;
    const maxHeight = 250;
    const minHeight = 30;

    const generatePipes = () => {
        this.pipes.push({
            x: 288,
            y: Math.random() * (maxHeight - minHeight) + minHeight
        });
    };

    const update = () => {
        if (frames % between === 0) {
            generatePipes();
        }
        frames++;
        this.pipes.forEach(pipe => pipe.x -= game.speed)
    };

    this.upperHitBox = () => this.pipes[0].y;
    this.lowerHitBox = () => this.pipes[0].y + gap;

    this.reset = () => {
        this.x = 288;
        this.pipes = [];
        frames = 0;
    };

    this.draw = () => {
        update();
        this.pipes.forEach(pipe => {
            let upper = pipe.y;
            let lower = 400 - pipe.y - gap;
            context.drawImage(pipeUp, 0, 0, width, lower, pipe.x, game.height - 112 - lower, width, lower);
            context.drawImage(pipeDown, 0, 320 - upper, width, upper, pipe.x, 0, width, upper);
        });
    };

};