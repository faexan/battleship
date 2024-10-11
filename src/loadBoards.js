const boardsContainer = document.querySelector(".gameBoards");

function createGrid(player, boardsDiv) {
  const gridDiv = document.createElement("div");
  gridDiv.classList.add("gridDiv");
  for (let i = 0; i < 10; i += 1) {
    const parentDiv = document.createElement("div");
    for (let j = 0; j < 10; j += 1) {
      const childDiv = document.createElement("div");
      childDiv.setAttribute("class", `${player} gridBox`);
      childDiv.id = `${player}${i}${j}`;
      parentDiv.appendChild(childDiv);
    }
    gridDiv.appendChild(parentDiv);
  }
  boardsDiv.appendChild(gridDiv);
}

function loadBoards() {
  createGrid("p1", boardsContainer);
  createGrid("p2", boardsContainer);
}
export { loadBoards, createGrid };
