// Strings are immutable! modifying a string does not do anything
// we need to create new strings from existing ones

var str = "Hello World"
str[3] = "b"
console.log(str)
str = str.replace('H', 'Changed')
console.log(str)