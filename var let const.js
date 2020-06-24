// var keyword variables are scoped to the function in which they are created, if outside of a function, then global scope

// let and const are block scoped, so only accessible within nearest curly braces (functions, if-else, for loops)
function foo() {
  // All variables are accessible within functions.
  var bar = 'bar';
  let baz = 'baz';
  const qux = 'qux';

  console.log(bar); // bar
  console.log(baz); // baz
  console.log(qux); // qux
}
// console.log(bar); // ReferenceError: bar is not defined
// console.log(baz); // ReferenceError: baz is not defined
// console.log(qux); // ReferenceError: qux is not defined
// foo()

if (true) {
  var bar = 'bar'; // becomes global scoped var
  let baz = 'baz';
  const qux = 'qux';
}

// var declared variables are accessible anywhere in the function scope.
console.log(bar); // bar
// let and const defined variables are not accessible outside of the block they were defined in.
console.log(baz); // ReferenceError: baz is not defined
console.log(qux); // ReferenceError: qux is not defined