let gameCanvas= document.getElementById("gameCanvas");
let gameCanvasText= gameCanvas.getContext("2d");
let snake = [ {x:150, y:150}, {x:140, y:150}, {x:130, y:150},{x:120, y:150}, {x:110, y:150} ]
gameCanvasText.rect(0, 0, 300, 300);
gameCanvasText.stroke();

//read arrays from left to right = head to tail
function drawSnakePart(snakePart) { gameCanvasText.fillStyle= 'blue'; gameCanvasText.strokeStyle = 'lightgreen'; gameCanvasText.fillRect(10,10); gameCanvasText.strokeRect(10,10);}
function drawSnake() { snake.forEach(drawSnakePart);}