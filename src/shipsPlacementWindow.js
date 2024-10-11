import { createGrid } from "./loadBoards";

function inputColorControl(div, color) {
  const targetDivId = div.id.slice(10);
  const remainingBoxes = Number(targetDivId[1]);
  const shipLength = 5;
  if (shipLength - remainingBoxes >= 0) {
    for (let i = 0; i < shipLength; i += 1) {
      const string = Number(targetDivId);
      if (string <= 9) {
        const box = document.querySelector(`#inputBoard0${string + i}`);
        box.style.backgroundColor = color;
      } else {
        const box = document.querySelector(`#inputBoard${string + i}`);
        box.style.backgroundColor = color;
      }
    }
  }
}

function placeShips() {
  const inputDivs = document.querySelectorAll(".inputBoard");

  inputDivs.forEach((div) => {
    div.addEventListener("mouseenter", () => {
      inputColorControl(div, "yellow");
    });
    div.addEventListener("mouseleave", () => {
      inputColorControl(div, "transparent");
    });
    div.addEventListener("click", () => {
      inputColorControl(div, "yellow");
    });
  });
}

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

export default placementPage;
