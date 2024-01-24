// codeSignal intro - exploring the waters no.14

// Several people are standing in a row and need to be divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.

// You are given an array of positive integers - the weights of the people. Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.

// Example

// For a = [50, 60, 60, 45, 70], the output should be
// solution(a) = [180, 105].

function solution(a) {
  const team1 = [];
  const team2 = [];
  a.forEach((player, index) => index % 2 === 0 ? team1.push(player) : team2.push(player))
  const team1weight = team1.reduce((acc, curr) => acc += curr, 0);
  const team2weight = team2.reduce((acc, curr) => acc += curr, 0);
  return [team1weight, team2weight]
}

// console.log(solution([50, 60, 60, 45, 70]))