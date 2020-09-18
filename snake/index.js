function Game() {

    const CONSTANTS = {
        SNAKE_FILL_STYLE: 'lightBlue',
        SNAKE_STROKE_STYLE: 'darkBlue',
        SNAKE_PART_SIZE: 10,
        SNAKE_MOVEMENT_SPEED: 100,
        BOARD_FILL_STYLE: 'white',
        BOARD_STROKE_STYLE: 'black',
        BOARD_WIDTH: 600,
        BOARD_HEIGHT: 600,
    }

    const DIRECTION = {
        LEFT: 'left',
        UP: 'up',
        RIGHT: 'right',
        DOWN: 'down',
    }

    const KEY = {
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        A: 65,
        W: 87,
        D: 68,
        S: 83,
    }

    const gameBoard = document.getElementById('canvas');
    gameBoard.width = CONSTANTS.BOARD_WIDTH;
    gameBoard.height = CONSTANTS.BOARD_HEIGHT;
    const context = gameBoard.getContext('2d');

    let snake = [  {x: 200, y: 200},  {x: 190, y: 200},  {x: 180, y: 200},  {x: 170, y: 200},  {x: 160, y: 200},];
    let direction = DIRECTION.DOWN;
    let state = true;

    const drawSnakePart = (part) => {
        context.fillStyle = CONSTANTS.SNAKE_FILL_STYLE;
        context.strokeStyle = CONSTANTS.SNAKE_STROKE_STYLE;
        context.fillRect(part.x, part.y, CONSTANTS.SNAKE_PART_SIZE, CONSTANTS.SNAKE_PART_SIZE);
        context.strokeRect(part.x, part.y, CONSTANTS.SNAKE_PART_SIZE, CONSTANTS.SNAKE_PART_SIZE);
    }

    const drawSnake = (snake) => {
        snake.forEach(part => drawSnakePart(part));
    }

    const changeDirection = (ev) => {
        switch (ev.keyCode) {
            case KEY.LEFT:
            case KEY.A:
                direction = DIRECTION.LEFT;
                break;
            case KEY.UP:
            case KEY.W:
                direction = DIRECTION.UP;
                break;
            case KEY.RIGHT:
            case KEY.D:
                direction = DIRECTION.RIGHT;
                break;
            case KEY.DOWN:
            case KEY.S:
                direction = DIRECTION.DOWN;
                break;
        }
    }

    const moveSnake = (direction) => {
        if (!state) {
            return;
        }
        let head;
        switch (direction) {
            case DIRECTION.RIGHT:
                head = {x: snake[0].x + CONSTANTS.SNAKE_PART_SIZE, y: snake[0].y};
                break;
            case DIRECTION.LEFT:
                head = {x: snake[0].x - CONSTANTS.SNAKE_PART_SIZE, y: snake[0].y};
                break;
            case DIRECTION.UP:
                head = {x: snake[0].x, y: snake[0].y - CONSTANTS.SNAKE_PART_SIZE};
                break;
            case DIRECTION.DOWN:
                head = {x: snake[0].x, y: snake[0].y + CONSTANTS.SNAKE_PART_SIZE};
        }
        if (head.x >= CONSTANTS.BOARD_WIDTH || head.y >= CONSTANTS.BOARD_HEIGHT
        || head.x < 0 || head.y < 0) {
            state = false;
            document.removeEventListener("keydown", changeDirection)
            return;
        }
        snake.unshift(head);
        snake.pop();
    }

    const clearCanvas = () => {
        context.fillStyle = CONSTANTS.BOARD_FILL_STYLE;
        context.strokestyle = CONSTANTS.BOARD_STROKE_STYLE;
        context.fillRect(0, 0, CONSTANTS.BOARD_WIDTH, CONSTANTS.BOARD_HEIGHT);
        context.strokeRect(0, 0, CONSTANTS.BOARD_WIDTH, CONSTANTS.BOARD_HEIGHT);
    }

    const gameRun = () => {
        clearCanvas();
        moveSnake(direction);
        drawSnake(snake);
        setTimeout(gameRun, CONSTANTS.SNAKE_MOVEMENT_SPEED)
    }

    this.init = () => {
        gameRun();
        document.addEventListener("keydown", changeDirection)
    }

}

window.onload = () => {
    this.game = new Game();
    this.game.init();
}
