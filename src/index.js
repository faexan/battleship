import "./styles.css";
import { loadBoards } from "./loadBoards";
import playersTurns from "./playerTurn";
import placementPage from "./shipsPlacementWindow";

placementPage();

const startGameBtn = document.querySelector(".startGameBtn");

startGameBtn.addEventListener("click", () => {
  loadBoards();
  playersTurns();
  const placementBoardDiv = document.querySelector(".placePage");
  placementBoardDiv.innerHTML = "";
});
