// Spread syntax allows an iterable such as an array, string, or object, to be expanded in places where zero or more arguments, or elements are expected.

const sum = (x, y, z) => x + y + z;

const numbers = [1, 2, 3]

console.log(sum(...numbers))

// concatenate two arrays
const arr1 = [0, 1, 2]
const arr2 = [3, 4, 5]
// we can also use arr1 = arr1.concat(arr2)
const arr3 = [...arr1, ...arr2] // [0,1,2,3,4,5]

const obj = {
  age: 10,
  name: "Terence"
}

const modifiedObj = {
  // get all key/value of obj
  ...obj,
  hobby: "Sports"
}

