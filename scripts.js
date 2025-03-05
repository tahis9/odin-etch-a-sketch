const docWidth = 960;
const container = document.querySelector(".container")
const opacityDelta = 0.1;


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
    });
  });
}



document.addEventListener("DOMContentLoaded", createSquares(16));
