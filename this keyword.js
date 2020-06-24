// the value of this depends on how the function is called via several rules.

// 1. If the new keyword is used when calling the function, this inside the function is a brand new object.
function newThis() {
  console.log(this) // newThis {}
  this.value = 10;
  console.log(this) // newThis { value: 10 }
}
new newThis();

// 2. If apply, call, or bind are used to call a function, this inside the function is the object that is passed in as the argument
function fn() {
  console.log(this)
}

let obj = {
  value: 5
}

let boundFn = fn.bind(obj)
boundFn() // { value: 5}
fn.call(obj) // { value: 5}
fn.apply(obj) // { value: 5}


// 3. If a function is called as a method of an object. The this will be the object that the function is a property of.
obj = {
  value: 5,
  printThis: function () {
    console.log(this)
  }
}
obj.printThis(); // { value: 5, printThis: f}

// 4. If a function is invoked as a free function invocation, this will be the global object. On browsers its the window object.
fn(); // Global Object

// 5 If multiple of the above rules apply, the rule that is higher wins and will set the this value.

// Caution - when using arrow functions as methods, they do not have their own this property
obj = {
  i: 10,
  b: () => console.log(this.i, this),
  c: function () {
    console.log(this.i, this)
  }
}
obj.b() // undefined, Window or Global Object
obj.c() // 10, Object { i, b, c}

console.log(typeof NaN)