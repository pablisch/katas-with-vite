// CodeSignal Intro - Island of Knowledge No.22

// You are given an array of integers representing coordinates of collision situated on a straight line.

// Assume that you are jumpDistanceing from the point with coordinate 0 to the right. You are allowed only to make jumpDistances of the same length represented by some integer.

// Find the minimal length of the jumpDistance enough to avoid all the collision.

// Example

// For inputArray = [5, 3, 6, 7, 9], the output should be
// solution(inputArray) = 4.

// an image is included for clarity, see ./images/avoidObstaclesExample.png

function solution(inputArray) {
  const limit = Math.max(...inputArray) + 1;
  let jumpDistance = 2;

  while (jumpDistance < 1001) {
    let currentPosition = 0;
    let collision = false;

    while (currentPosition <= limit && collision === false) {
      if (inputArray.includes(currentPosition)) collision = true;
      currentPosition += jumpDistance;
    }

    if (collision === false) return jumpDistance;

    jumpDistance++
  }
}

function solution2(inputArray) {
  const limit = Math.max(...inputArray) + 1;
  let jumpDistance = 2;

  while (jumpDistance < 100000000) {
    console.log('in while loop')
    let currentPosition = 0;
    let landingArray = [];

    while (currentPosition <= limit) {
      landingArray.push(currentPosition);
      currentPosition += jumpDistance;
    }

    const collisionArray = inputArray.filter(obstacle => landingArray.includes(obstacle))
    // console.log(collisionArray);
    if (collisionArray.length === 0) {
      return jumpDistance;
    }

    jumpDistance++
  }
}

// console.log(solution([5, 3, 6, 7, 9]));
// console.log(solution([1000, 999]));

