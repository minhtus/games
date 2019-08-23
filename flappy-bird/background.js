const background = function (game) {
    const context = game.context;

    const background = new Image();
    background.src = './assets/background-day.png';
    const ground = new Image();
    ground.src = './assets/ground.png';
    const startMessage = new Image();
    startMessage.src = './assets/message.png';
    const gameOverMessage = new Image();
    gameOverMessage.src = './assets/gameover.png';

    let x = 0;
    const between = 50;

    function update() {
        if (game.gameState === 0 || game.gameState === 2) {
            return;
        }
        x--;
        if (x < -game.width) {
            x = 0;
        }
    }

    this.drawStartGame = () => {
        context.drawImage(background, 0, 0);
        context.drawImage(ground, 0, game.height - 112);
        context.drawImage(startMessage, 51, 50);
    };

    this.drawEndGame = () => {
        context.drawImage(gameOverMessage, 48, 150);
    };

    this.drawInGame = () => {
        update();
        context.drawImage(background, x, 0);
        context.drawImage(background, x + game.width, 0);
        context.drawImage(ground, x, game.height - 112);
        context.drawImage(ground, x + game.width, game.height - 112);
    }
};