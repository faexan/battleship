import Ship from "./ship";

class Gameboard {
  constructor(
    player,
    ship1Cdinate,
    ship2Cdinate,
    ship3cdinates,
    ship4cdinates,
    ship5cdinates,
  ) {
    this.player = player;
    this.ship1 = new Ship(ship1Cdinate.length, ship1Cdinate);
    this.ship2 = new Ship(ship2Cdinate.length, ship2Cdinate);
    this.ship3 = new Ship(ship3cdinates.length, ship3cdinates);
    this.ship4 = new Ship(ship4cdinates.length, ship4cdinates);
    this.ship5 = new Ship(ship5cdinates.length, ship5cdinates);
    this.missedCoordinates = [];
    this.successfullCoordinates = [];
    this.allShips = [
      this.ship1,
      this.ship2,
      this.ship3,
      this.ship4,
      this.ship5,
    ];
    this.receiveAttack = function (attackedCoordinates) {
      let hit = false;
      this.allShips.forEach((ship) => {
        ship.coordinates.forEach((coordinate) => {
          if (attackedCoordinates === coordinate) {
            ship.hit();
            hit = true;
            this.successfullCoordinates.push(attackedCoordinates);
          }
        });
      });
      if (hit === false) {
        this.missedCoordinates.push(attackedCoordinates);
      }
    };
    this.checkAllSunk = function () {
      let allSunk = true;
      this.allShips.forEach((ship) => {
        if (ship.isSunk === false) {
          allSunk = false;
        }
      });
      return allSunk;
    };
  }
}

export default Gameboard;
