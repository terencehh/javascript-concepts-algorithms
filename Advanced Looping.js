const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

//1
// for (let i = 0; i < basket.length; i++) {
//   console.log(basket[i]);
// }

// // //2
// basket.forEach(item => {
//   console.log(item);
// })

for (item in detailedBasket) {
  console.log(item);
}

Object.entries(detailedBasket).forEach(item => {
  console.log(item[0], item[1])
})

// for (item of basket) {
//   console.log(item);
// }

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1, 0, 3, 100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(arr) {

  if (arr.length === 0) { return 0 }

  let max = Number.NEGATIVE_INFINITY

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }

  return max
}

function biggestNumberInArray2(arr) {

  if (arr.length === 0) { return 0 }

  let max = Number.NEGATIVE_INFINITY
  for (item of arr) {
    if (item > max) {
      max = item
    }
  }
  return max


}

function biggestNumberInArray3(arr) {

  if (arr.length === 0) { return 0 }

  let max = Number.NEGATIVE_INFINITY
  arr.forEach(item => {
    if (item > max) {
      max = item
    }
  })
  return max
}


// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

function checkBasket(basket, lookingFor) {

  for (item in basket) {
    if (item === lookingFor) {
      return true
    }
  }
  return false
}