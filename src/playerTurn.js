let playerTurn = "player1";

function playersTurns() {
  const player1Divs = document.querySelectorAll(".p1");
  const player2Divs = document.querySelectorAll(".p2");
  player1Divs.forEach((div) => {
    div.addEventListener("click", () => {
      if (playerTurn === "player1") {
        const d = div;
        d.style.backgroundColor = "yellow";
        playerTurn = "player2";
      }
    });
  });
  player2Divs.forEach((div) => {
    div.addEventListener("click", () => {
      if (playerTurn === "player2") {
        const d = div;
        d.style.backgroundColor = "yellow";
        playerTurn = "player1";
      }
    });
  });
}

export default playersTurns;
