const background = function (game) {
    const context = game.context;

    const background = new Image();
    background.src = './assets/background-day.png';
    const ground = new Image();
    ground.src = './assets/ground.png';

    let x = 0;

    function update() {
        x--;
        if (x < -game.width) {
            x = 0;
        }
    }

    this.draw = () => {
        update();
        context.drawImage(background, x, 0);
        context.drawImage(background, x + game.width, 0);
        context.drawImage(ground, x, game.height - 112);
        context.drawImage(ground, x + game.width, game.height - 112);
    }
};