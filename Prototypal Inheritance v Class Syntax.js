// PROTOTYPAL SYNTAX
function Parent(name) {
  this.name = name
}

Parent.prototype.getName = function () {
  return this.name
}

function Child(name) {
  Parent.call(this, name)
  this.age = 0
}

// Bind Child.prototype's property to point to Parent.prototype
Child.prototype = Parent.prototype
Child.prototype.constructor = Child

Child.prototype.getAge = function () {
  return this.age
}

// __proto__ of c refers to Child.prototype
var c = new Child("Bobby")
console.log(c.getAge(), c.getName())

// CLASS SYNTAX
// class Parent {
//   constructor(name) {
//     this.name = name;
//   }
//   getName() {
//     return this.name
//   }
// }


// class Child extends Parent {
//   constructor(name) {
//     super(name);
//     this.age = 0
//   }

//   getAge() {
//     return this.age
//   }
// }

// var c = new Child("Bobby")
// console.log(c.getAge(), c.getName())
