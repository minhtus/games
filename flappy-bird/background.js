const background = function (game) {
    this.context = game.context;

    const background = new Image();
    background.src = './assets/background-day.png';
    const ground = new Image();
    ground.src = './assets/ground.png';

    function update() {

    }

    this.draw = () => {
        update();
        this.context.drawImage(background, 0, 0);
        this.context.drawImage(ground, 0, game.height - 112);
    }
};