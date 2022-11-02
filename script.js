const board = document.querySelector(".board");
let boxSize = 600;
let boardSquares = 64;
let measures = boxSize / boardSquares;
let isDrawing = false;

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
  //reset the board
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
  // item.addEventListener("mousedown", () => {
  //   item.style.backgroundColor = "black";
  // });
});
