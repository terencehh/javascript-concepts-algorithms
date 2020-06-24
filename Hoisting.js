// Hoisting is a term that explains the behavior of variable/function declarations in code.

// var defined with var keyword will have declaration moved up to the module/function-level scope.

// hoisted variables are only undefined for var keyword
// if we try to access variables with let and const a reference error occurs

console.log(foo)
var foo = 1
console.log(foo)

// function declarations have the body hoisted instead
console.log(boo)
function boo() {
  return boo
}

// function expressions do not get hoisted
wrong()
var wrong = function () {
  console.log("wrong!")
}