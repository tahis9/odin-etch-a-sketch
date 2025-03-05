const docWidth = 960;
const container = document.querySelector(".container")

function createSquares(sideSquares) {
  const squareDiv = document.createElement("div")
  let divWidth = `${(docWidth/sideSquares)}px`;
  squareDiv.style.width = divWidth;
  squareDiv.style.height = divWidth;
  squareDiv.setAttribute("class", "squares");
  for (let i = 0; i < sideSquares**2; i++) {
    container.appendChild(squareDiv.cloneNode(true));
  }
  // console.log("test")
}
// document.addEventListener("load", createSquares(16));
document.addEventListener("DOMContentLoaded", createSquares(16));