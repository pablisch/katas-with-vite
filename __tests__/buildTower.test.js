import { buildTower } from "../src/buildTower.js";

describe('buildTower()', () => {
  test.each([
    [1, ['*']],
    [3, [
      "  *  ",
      " *** ", 
      "*****"
    ]],
    [6, [
      "     *     ", 
      "    ***    ", 
      "   *****   ", 
      "  *******  ", 
      " ********* ", 
      "***********"
    ]]
  ])('should return an array of strings representing the floors of a tower made of asterisks', (numOfFloors, expectedArray) => {
    expect(buildTower(numOfFloors)).toEqual(expectedArray)
  })
})