// arrays and objects are passed by reference whenever they are mentioned
// if we want to copy arrays or objects by value, we do
// array: [].concat(arr_to_copy)
// obj: {...obj_to_copy}
let arr = [1, 2, 3]
let arr2 = arr
let arr3 = [].concat(arr)
arr.push(4)
console.log(arr, arr2, arr3)

let obj = {
  name: "bob",
  age: 20
}

let obj2 = obj
let obj3 = { ...obj }
obj2.hobby = "Sports"
console.log(obj, obj2, obj3)

// numbers are passed by value
let num = 5
let num2 = num
num = 6
console.log(num, num2)