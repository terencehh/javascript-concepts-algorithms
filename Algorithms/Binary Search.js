function binarySearch(key, arr) {

  let low = 0;
  let high = arr.length - 1
  let mid = Math.floor((low + high) / 2)

  while (low < high) {

    console.log(`Low is ${low}`)
    console.log(`Mid is ${mid}`)
    console.log(`High is ${high}\n`)


    if (arr[mid] === key) {
      return key
    }
    else if (arr[mid] > key) {
      high = mid
      mid = Math.floor((low + high) / 2)
    }
    else {
      low = mid
      mid = Math.floor((low + high) / 2)
    }
  }
  return false
}

console.log(binarySearch(6, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))