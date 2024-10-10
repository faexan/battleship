class Ship {
  constructor(length, coordinates) {
    this.length = length;
    this.hitCount = 0;
    this.isSunk = false;
    this.coordinates = coordinates;
    this.hit = function () {
      this.hitCount += 1;
    };
    this.checkSunk = function () {
      if (this.length === this.hitCount) {
        this.isSunk = true;
      }
    };
  }
}

export default Ship;
