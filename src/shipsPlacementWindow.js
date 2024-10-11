import { createGrid } from "./loadBoards";

function placementPage() {
  const screen = document.querySelector(".container");
  const shipsDiv = document.createElement("div");
  const container = document.createElement("div");
  const div1 = document.createElement("div");
  const pageHeadingDiv = document.createElement("div");
  const placementBoardDiv = document.createElement("div");
  const startGameBtnDiv = document.createElement("div");

  const heading = document.createElement("h1");
  const startGameBtn = document.createElement("button");

  heading.innerText = "Place Your Carrier:";
  startGameBtn.innerText = "Start Game";
  createGrid("inputBoard", placementBoardDiv);

  container.classList.add("placePage");
  startGameBtn.classList.add("startGameBtn");

  pageHeadingDiv.appendChild(heading);
  startGameBtnDiv.appendChild(startGameBtn);
  div1.appendChild(pageHeadingDiv);
  div1.appendChild(placementBoardDiv);
  div1.appendChild(startGameBtnDiv);
  container.appendChild(div1);
  container.appendChild(shipsDiv);
  screen.appendChild(container);
  placeShips();
}

function placeShips() {
  const inputDivs = document.querySelectorAll(".inputBoard");

  inputDivs.forEach((div) => {
    div.addEventListener("mouseenter", () => {
      const divID = Number(div.id.slice(10));





    });
  });
}

export default placementPage;
