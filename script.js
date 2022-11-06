const board = document.querySelector(".board");
const smallBoard = document.querySelector(".thirty-two");
const bigBoard = document.querySelector(".sixty-four");
const resetButton = document.querySelector(".reset");
const colorInput = document.querySelector(".color");
const erasor = document.querySelector(".erasor");
const black = document.querySelector(".black");
let boxSize = 600;
let boardSquares = 32;
let measures = boxSize / boardSquares;
let isDrawing = false;
let color = "black";

function createDivs() {
  for (i = 0; i < boardSquares * boardSquares; i++) {
    let square = document.createElement("div");
    square.style.height = `${measures}px`;
    square.style.width = `${measures}px`;
    square.classList.add("square");
    board.insertAdjacentElement("beforeend", square);
  }
}
function draw() {
  document.querySelectorAll(".square").forEach((item) => {
    item.addEventListener("mousedown", () => (isDrawing = true));
    item.addEventListener("mouseup", () => (isDrawing = false));
    item.addEventListener("mousemove", () => {
      if (!isDrawing) return;
      item.style.backgroundColor = color;
    });
  });
}

function removeDivs() {
  const paint = document.querySelectorAll(".square");
  if (paint.length > 0) {
    paint.forEach((item) => item.remove());
  } else return;
}

smallBoard.onclick = function () {
  boardSquares = 32;
  measures = boxSize / boardSquares;
  removeDivs();
  createDivs();
  draw();
};
bigBoard.onclick = function () {
  boardSquares = 64;
  measures = boxSize / boardSquares;
  removeDivs();
  createDivs();
  draw();
};
resetButton.onclick = function () {
  removeDivs();
  createDivs();
  draw();
};
erasor.onclick = function () {
  color = "wheat";
};
black.onclick = function () {
  color = "black";
};

function changeColor() {
  colorInput.addEventListener("change", () => {
    color = colorInput.value;
  });
}
console.log(color);
changeColor();
createDivs();
draw();
