class Player {
  constructor(name, type) {
    // we use this keyword so that whenever we create a player, we can access the name & type property.
    this.name = name;
    this.type = type;

    // private attributes
    this._private = "cannot access?"
  }

  introduce() {
    console.log(this) // this refers to this new Object
    console.log(`Hi I am ${this.name}. I'm a ${this.type}`)
  }
}
// child class to parent.
// Inheritance
class Wizard extends Player {
  constructor(name, type) {
    super(name, type)
  }

  play() {
    console.log(`Hi im a ${this.type}`)
  }
}

class Student {
  constructor() {
    this._age = 12;
    this.name = "Terey"
  }
}

let me = new Student()
console.log(me._age, me.name)

let player = new Player("Ter", "Mage")
player.introduce()