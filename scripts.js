let docWidth = 600;
const container = document.querySelector(".container");
const opacityDelta = 0.1;
const resetBtn = document.querySelector("#resetBtn");
const resetCanvas = document.querySelector("#resetCanvas");

function canvas() {
container.style.width = `${docWidth}px`;
container.style.height = `${docWidth}px`;
}
canvas()

function randomiseRGB() {
  let R = Math.floor(Math.random()*256);
  let G = Math.floor(Math.random()*256);
  let B = Math.floor(Math.random()*256);
  randomColour = "rgb(" + R + "," + G + "," + B + ", 0.5)";
  return randomColour;
}

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
      squares[i].style.backgroundColor = randomiseRGB();
      squares[i].style.opacity = Number(squares[i].style.opacity)+opacityDelta;
      // console.log(i) 
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

function changeCanvas() {
  canvasWidth = +window.prompt("Pixel width/height for Canvas (Min: 100)", 600);
  let i = 1;
  while (i){
    if (canvasWidth >= 100 && Number.isInteger(canvasWidth)) {
      docWidth = canvasWidth;
      canvas();
      reset();
      return
    } else {
      canvasWidth = +window.prompt("Invalid response. Please enter an integer greater than 99", 600);
    }
  }
}

document.addEventListener("DOMContentLoaded", createSquares(16));
resetBtn.addEventListener("click", reset);
resetCanvas.addEventListener("click", changeCanvas);

