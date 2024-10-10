import Gameboard from "./Gameboard";

class Player {
  constructor(player) {
    this.player = player;
    this.gameboard = new Gameboard();
  }
}

export default Player;
