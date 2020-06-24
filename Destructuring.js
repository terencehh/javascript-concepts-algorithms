const arr = ["one", "two", "three", "four"]

const obj = {
  age: 10,
  country: "Malaysia"
}

// destructuring array
const [one, two, three, four] = arr
console.log(one, two, three, four) // one two three four

// destructuring object
const { age, country } = obj
console.log(age, country) // 10 Malaysia

