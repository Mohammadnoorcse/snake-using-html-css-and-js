// game constants and variables

let direction = { x: 0, y: 0 };
const foodSound = new Audio('../music/food.mp3');
const gameOversound = new Audio('../music/gameover.mp3');
const movesound = new Audio('../music/move.mp3');
const musicsound = new Audio('../music/music.mp3');
let speed = 2;
let lastPaintTime = 0;
let board = document.querySelector(".board");
let snakeArr = [
    {x:13,y:15}
]
food = { x: 6, y: 7 };

// game function

function main(ctime) {
    window.requestAnimationFrame(main);
    if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}
function gameEngine() {
    // part 1: Updating the snake array


    // part 2: Display the snake and food

    // Display the snake
    board.innerHtMl = "";
    snakeArr.forEach((e, index) => {
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
       
        if (index == 0) {
            snakeElement.classList.add("head");
        }
        else {
             snakeElement.classList.add("snake");
        }
        board.appendChild(snakeElement);
    });

    // display the food

            foodElement = document.createElement("div");
            foodElement.style.gridRowStart = food.y;
            foodElement.style.gridColumnStart = food.x;
            foodElement.classList.add("food");
            board.appendChild(foodElement);

}







// Main logic starts here
window.requestAnimationFrame(main);