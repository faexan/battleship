import { createGrid } from "./loadBoards";

function checkBoxStatus(arr, id) {
  return arr.filter((elem) => {
    return elem === id;
  });
}

function neutralizeBoxes(ids, event, mouseEnterHandler, mouseLeaveHandler) {
  const box = document.querySelector(ids);
  box.removeEventListener(mouseEnterHandler);
  box.removeEventListener(mouseLeaveHandler);
}

const clickedBoxesArr = [];
function inputColorControl(
  div,
  color,
  event,
  mouseEnterHandler,
  mouseLeaveHandler,
) {
  if (event === "click") {
    clickedBoxesArr.push(div.id);
  }
  const idArr = checkBoxStatus(clickedBoxesArr, div.id);
  const targetDivId = div.id.slice(10);
  const remainingBoxes = Number(targetDivId[1]);
  const shipLength = 5;
  if (shipLength - remainingBoxes >= 0) {
    for (let i = 0; i < shipLength; i += 1) {
      if (
        (color === "transparent" && idArr.length !== 1) ||
        color === "yellow"
      ) {
        const string = Number(targetDivId);
        if (string <= 9) {
          const box = document.querySelector(`#inputBoard0${string + i}`);
          if (event === "click") {
            for (let j = shipLength; j > 0; j -= 1) {
              const bx = document.querySelector(`#inputBoard0${string - j}`);
              if (bx) {
                neutralizeBoxes(bx, mouseEnterHandler, mouseLeaveHandler);
              }
            }
          }

          box.style.backgroundColor = color;
        } else {
          const box = document.querySelector(`#inputBoard${string + i}`);

          box.style.backgroundColor = color;
          if (event === "click") {
            for (let j = shipLength; j > 0; j -= 1) {
              const bx = document.querySelector(`#inputBoard0${string - j}`);
              if (bx) {
                neutralizeBoxes(bx, mouseEnterHandler, mouseLeaveHandler);
              }
            }
          }
        }
      }
    }
  }
}

function placeShips() {
  const inputDivs = document.querySelectorAll(".inputBoard");

  inputDivs.forEach((div) => {
    const mouseEnterHandler = () => inputColorControl(div, "yellow");
    const mouseLeaveHandler = () => inputColorControl(div, "transparent");

    div.addEventListener("mouseenter", mouseEnterHandler);
    div.addEventListener("mouseleave", mouseLeaveHandler);

    div.addEventListener("click", () => {
      inputColorControl(
        div,
        "yellow",
        "click",
        mouseEnterHandler,
        mouseEnterHandler,
      );
      div.removeEventListener("mouseenter", mouseEnterHandler);
      div.removeEventListener("mouseleave", mouseLeaveHandler);
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
