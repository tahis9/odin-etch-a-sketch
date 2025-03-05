const docWidth = 600;
const container = document.querySelector(".container");
const opacityDelta = 0.1;
const btn = document.querySelector(".btn");

container.style.width = `${docWidth}px`;
container.style.height = `${docWidth}px`;

function createSquares(sideSquares) {
  const squareDiv = document.createElement("div")
  let divWidth = `${(docWidth/sideSquares)}px`;
  squareDiv.style.width = divWidth;
  squareDiv.style.height = divWidth;
  squareDiv.setAttribute("class", "squares");
  for (let i = 0; i < sideSquares**2; i++) {
    container.appendChild(squareDiv.cloneNode(true));
  }
  let squares = document.querySelectorAll(".squares");
  squares.forEach((element,i) => { 
    element.addEventListener("mouseenter", () => {
      squares[i].style.opacity = Number(squares[i].style.opacity)+opacityDelta;
      console.log(i) 
    });
  });
}

function reset() {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  let squaresChoice;
  squaresChoice = +window.prompt("Squares per side for new canvas (Max: 100)", 16);
  let i = 1;
  while (i){
    if (squaresChoice <= 100 && squaresChoice > 0 && Number.isInteger(squaresChoice)) {
      createSquares(squaresChoice);
      return
    } else {
      squaresChoice = +window.prompt("Invalid response. Please enter a positive integer less than 101", 16);
    }
  }
}

document.addEventListener("DOMContentLoaded", createSquares(16));
btn.addEventListener("click", reset);
