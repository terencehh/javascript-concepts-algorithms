function add(a, b) {
  return a + b
}

console.log(add.call(null, 1, 2))
console.log(add.apply(null, [1, 2]))