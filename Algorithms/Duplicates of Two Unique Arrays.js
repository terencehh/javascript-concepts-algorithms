// assume both array 1 and array 2 are sorted.
arr1 = [1, 2, 3, 4, 5]
arr2 = [3, 3, 4]

let i = 0
let j = 0
// stores duplicate elements only once
repeating = {}
while (i < arr1.length && j < arr2.length) {
  if (arr1[i] === arr2[j]) {
    repeating[arr1[i]] = arr1[i]
    i += 1
    j += 1
  }
  else if (arr1[i] < arr2[j]) {
    i += 1
  }
  else {
    j += 1
  }
}


