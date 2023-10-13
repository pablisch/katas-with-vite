export function getLength(arr){
  //return length of arr
  return arr.length;
}

export function getFirst(arr){
  //return the first element of arr
  return arr[0];
}

export function getLast(arr){
  //return the last element of arr
  return arr[arr.length - 1];
}

export function pushElement(arr){
  var el = 1;
  //push el to arr
  arr.push(el);
  return arr;
}

export const pushElement2 = (arr) => {
  return arr.concat(1);
}

export function popElement(arr){
  //pop an element from arr
  arr.pop();
  return arr;
}

export const popElement2 = (arr) => {
  return arr.slice(0, arr.length - 1);
}