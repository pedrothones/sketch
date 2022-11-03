const board = document.querySelector(".board");
const smallBoard = document.querySelector(".thirty-two");
const bigBoard = document.querySelector(".sixty-four");
let boxSize = 600;
let boardSquares = 8;
let measures = boxSize / boardSquares;
let isDrawing = false;

function createDivs() {
  for (i = 0; i < boardSquares * boardSquares; i++) {
    let square = document.createElement("div");
    // square.style.backgroundColor = "white";
    square.style.height = `${measures}px`;
    square.style.width = `${measures}px`;
    square.classList.add("square");
    board.insertAdjacentElement("beforeend", square);
  }

  const resetButton = document.querySelector(".reset");
  const paint = document.querySelectorAll(".square");

  //function to be executed when drawing is true
  paint.forEach((item) => {
    //RESET THE COLOR
    resetButton.addEventListener(
      "click",
      () => (item.style.backgroundColor = "wheat")
    );

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
    console.log(paint.length);
    paint.forEach((item) => item.remove());
  } else return;
}

smallBoard.onclick = function () {
  removeDivs();
  createDivs();
};
bigBoard.onclick = function () {
  removeDivs();
  createDivs();
};
