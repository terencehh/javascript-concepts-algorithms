// partially applied function
const addTwoNum = x => y => x + y

let addFiveby = addTwoNum(5)
console.log(addFiveby(10)) // 15

// generic partial application function
// assume args are partially supplied via two calls
const partialApply = (fn, fixedArgs) => remainingArgs => fn.apply(this, fixedArgs.concat(remainingArgs))

const add = (a, b, c, d, e) => a + b + c + d + e;
const partial = partialApply(add, [1, 2]);
const final = partial([3, 4, 5]); // 15
