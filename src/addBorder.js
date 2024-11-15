// codeSignal intro - exploring the waters no.15

// Given a rectangular matrix of characters, add a border of asterisks(*) to it.
// Example
// For
// picture = ["abc",
//            "ded"]
// the output should be
// solution(picture) = ["*****",
//                      "*abc*",
//                      "*ded*",
//                      "*****"]

function solution(picture) {
  picture = picture.map(line => line = `*${line}*`);
  const border = '*'.repeat(picture[0].length);
  picture.push(border);
  picture.unshift(border);
  return picture;
}

console.log(solution(["abc", "ded"]))