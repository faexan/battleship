import Ship from "./index";

const ship1 = new Ship(3, 0, false);

ship1.hit();
ship1.hit();
ship1.hit();
ship1.isSunkFun();

test("Ship constructor", () => {
  expect(ship1.hitCount).toBe(3);
  expect(ship1.isSunk).toBe(true);
});
