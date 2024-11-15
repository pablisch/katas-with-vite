const spread = (array) => {
  console.log(...array);
}

// spread([1, 2, 3]);
// spread([1, 2, 3, "Hello", "World!", 4, 5, 6, 7]);
// spread('Pablo');
// console.log(..."Pablo") 

const add = (a, b, c, d) => {
  console.log(a + b + c + d);
};

// add(...[1, 2, 3, 4]);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// console.log(arr1.concat(arr2));
// console.log([...arr1, ...arr2]);
// console.log(Math.max(...arr1));
// console.log(Math.max(...arr2));
// console.log(Math.max(...[...arr1, ...arr2]));

const object = {
  "all numbers": [...arr1, ...arr2],
  letters: ["a", "b", "c"]
};

// console.log({
//   "all numbers": [...arr1, ...arr2],
//   letters: ["a", "b", "c"]
// })
