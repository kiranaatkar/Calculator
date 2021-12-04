let container = document.querySelector(".container");
let gridWidth = 3;
let gridHeight = 4;

function createGrid(gridWidth) {
  container.style.gridTemplateColumns = "1fr ".repeat(gridWidth);
  container.style.gridTemplateRows = "1fr ".repeat(gridHeight);

  for (let i = 1; i <= gridWidth * gridHeight; i++) {
    let newSquare = document.createElement("button");
    newSquare.classList.add("gridElement");
    container.appendChild(newSquare);
  }
}

createGrid(gridWidth);
