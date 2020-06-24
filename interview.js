function isPalindrome(string) {
  return string === string.split('').reverse().join('')
}
function countChar(c, str) {

  if (str.length === 0) { return 0 }
  let count = 0
  str.split('').forEach(char => {
    if (char === c) {
      count++
    }
  })
  return count
}
function findDuplicates(arr) {
  let duplicates = []
  let obj = {}
  for (i = 0; i < arr.length; i++) {

    if (obj[arr[i]] === undefined) {
      obj[arr[i]] = {
        count: 1,
        duplicate: false
      }
    }
    else {
      obj[arr[i]].count++
    }

    const { count, duplicate } = obj[arr[i]]

    if (count >= 2 && duplicate === false) {
      duplicates.push(arr[i])
      obj[arr[i]].duplicate = true
    }
  }
  console.log(obj)
  return duplicates
}

// for (let i = 1; i <= 100; i++) {
//   let f = i % 3 === 0
//   let b = i % 5 === 0
//   if (f && b) { console.log("fizzbuzz") }
//   else if (f) { console.log("fizz") }
//   else if (b) { console.log("buzz") }
//   else {
//     console.log("Nothing")
//   }
// }

const duplicate = arr => arr.concat(arr)

// console.log(duplicate([1, 2, 3, 4, 5]))

// console.log(isPalindrome("racecar"))
// console.log(isPalindrome("testing"))
// console.log(countChar("s", "strings"))
// console.log(findDuplicates([1, 2, 3, 3, 4, 5, 5, 4, 4, 3]))

// given a string of x words, return the abbreviated i18n version e.g.
// white --> w3e
// cat --> cat
// I'm-white white cat --> I'm-w3e w3e cat
function abbrev(string) {

  // convert into list of words
  let words = string.split(' ')

  let abbrevWords = words.map(word => {

    let wordList = []
    let start = 0
    let end = 0

    // split each word again by checking special characters
    for (let i = 0; i < word.length; i++) {
      if (isLetter(word[i])) {
        end++
        if (end === word.length) {
          wordList.push(word.substring(start, end))
        }
      }
      else {
        if (end - start > 0) {
          wordList.push(word.substring(start, end))
        }
        wordList.push(word[i])
        start = i + 1
        end = i + 1
      }
    }
    // check for any words > length 3
    wordList = wordList.map(word => {
      if (word.length > 3) {
        word = word[0] + (word.length - 2).toString() + word[word.length - 1]
      }
      return word
    })
    // use join function to combine the array back into a single string
    return wordList.join("")
  })
  return abbrevWords.join(" ")
}

// assuming letter is english it can check if any char is a letter
function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
}

console.log(abbrev("I'm-white white cat"))