const board = document.querySelector(".board");
const smallBoard = document.querySelector(".thirty-two");
const bigBoard = document.querySelector(".sixty-four");
const resetButton = document.querySelector(".reset");
let boxSize = 600;
let boardSquares = 32;
let measures = boxSize / boardSquares;
let isDrawing = false;

function createDivs() {
  console.log(boardSquares);
  for (i = 0; i < boardSquares * boardSquares; i++) {
    let square = document.createElement("div");
    // square.style.backgroundColor = "white";
    square.style.height = `${measures}px`;
    square.style.width = `${measures}px`;
    square.classList.add("square");
    board.insertAdjacentElement("beforeend", square);
  }

  const paint = document.querySelectorAll(".square");

  //function to be executed when drawing is true
  paint.forEach((item) => {
    item.addEventListener("mousedown", () => (isDrawing = true));
    item.addEventListener("mouseup", () => (isDrawing = false));
    item.addEventListener("mousemove", () => {
      if (!isDrawing) return;
      item.style.backgroundColor = "black";
    });
  });
}
function removeDivs() {
  const paint = document.querySelectorAll(".square");
  if (paint.length > 0) {
    paint.forEach((item) => item.remove());
  } else return;
}
createDivs();

smallBoard.onclick = function () {
  boardSquares = 32;
  measures = boxSize / boardSquares;
  removeDivs();
  createDivs();
};
bigBoard.onclick = function () {
  boardSquares = 64;
  measures = boxSize / boardSquares;
  removeDivs();
  createDivs();
};
resetButton.onclick = function () {
  removeDivs();
  createDivs();
};
