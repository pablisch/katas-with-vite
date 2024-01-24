const array = ["Jan", "Feb", "Mar", "Apr", "May"];

const newArray = array.splice(2, 0, "Jun", "Jul")
// const newArray2 = [...array].splice(2)
// const newArray3 = [...array].splice(3)
// const newArray4 = [...array].splice(4)
// const newArray5 = [...array].splice(5)

console.log('original', array)
console.log('new array', newArray)
// console.log(newArray2)
// console.log(newArray3)
// console.log(newArray4)
// console.log(newArray5)