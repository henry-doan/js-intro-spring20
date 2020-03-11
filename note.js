// // Commment 
// // Datatypes
// string 
//   "" ''
// Integer 
//   034
// Hash 
//   { key: value }
// Boolean
//   true 1
//   false 0
// float
//   1.2334
// array
//   [ ]
// null // js nil 
// undefined 
// objects 
//   classes
//   hashes
//   nouns 
//  Date
//  // Number
//  // Char
 
 // Operators
// +
// -
// *
// / 
// PEDMAS
// %

// Comparators
// >
// < 
//  >=
//  <=   // =>
// =  assignment
// == equal to value
// === equal to value and type

// != not equal to 

 // Logical Op
 // && 
 // || 

// Variables
  // naming rules
  // letters, numbers, underscores, dollar signs
  // has to begin with letter $ or _
  // case sensitive 
  // stay away from reserve word, class, var new, console
  // Descriptive
// var firstName = "Dave"
// console.log(firstName)

// var balance = 100
// balance = 25
// balance = "string"
// console.log(balance)

// var myNum = 4
// // myNum++
// // --
// // += 
// // -=
// // *=
  
// console.log(myNum)

// var greeting = 'hi'
// var planet = 'earth'
// console.log(greeting + " " + "venus" + 3/4 + "\n")

// String Props
// var planet = 'earth'

// console.log(planet.length)
// console.log(planet.charAt(2))
// console.log(planet.charAt(1000))
// console.log(planet.charAt(-1))

// var arr = ['str1', 'str2']
// console.log(arr[0].charAt(1))

// Numbers
// var num = Number("1")
// var num = Number("1.232");
// var num = Number("a");
// var num = Number(false);
// var num = Number("1.232a");
// var num = parseInt("1")
// var num = parseInt("1.7a")
// var num = parseInt("1a2")
// var num = parseFloat('1.34345')
// var num = 5
// console.log(num.toString())

// var num = 5.274
// console.log(num.toFixed(1))
// console.log(num.toFixed(6))
// console.log(num.toPrecision(2))

// console.log(Math.random())
// console.log(Math.random() * 7)
// console.log(Math.min( 5, 1, -2, 6))
// console.log(Math.max( 5, 1, -2, 6))
// console.log(Math.round(Math.random() * 7))

// console.log(Math.ceil(8.2))
// console.log(Math.floor(8.8))
// console.log(Math.PI)
// console.log(Math.E)

// Functions - ruby methods
function cl(input) {
  console.log(input)
};

// var arr = ["bob", "jill", "tim"]
 
// cl(arr[1])
// cl(arr.indexOf("tim"))
// cl(arr.indexOf("tom"))
// cl(arr.join(","))
// cl(arr.includes("Jill"))
// cl(arr.includes("jill"))
// arr.push("ric")
// arr.unshift("ric")
// arr.pop()
// arr.shift()
// arr.slice(1)
// cl(arr.slice(2))
// cl(arr.length)
// cl(arr.reverse())
// cl("hi".reverse())
// cl(Math.PI.reverse())

// for( var i = 0; i < 1; i++) {
//   cl(arr[i])
// }

// for( i = 0; i < arr.length; i++) {
//   cl(arr[i])
// }

// for( Integer i = 0; i < arr.length; i++) {
//   cl(arr[i])
// }

// arr.forEach( function(name) {
//   cl(name)
// })

// for (let name of arr) {
//    cl(name)
// }

// arr.map( function(name) {
//   cl(name)
// })

// var nums = [1, 2, 3, 4, 5, 6, 7]
// var even = nums.filter( function(num) {
//   return num % 2 === 0
// })

// var sum = nums.reduce( function(total, num) {
//   return total + num
// }, 0)

// var total = 0
// for( var i = 0; i < 1; i++) {
//   total += arr[i]
// }

// cl(sum)

// Object Hashes
// var person = { name: 'john', age: 34 }
// cl(person.age)
// cl(person['name'])
// person.name = 'sally'
// person.phone = '123-123-1233'
// cl(person)

// var contacts = [
//   { name: 'john', phone: '123-123-123' },
//   { name: 'sally', phone: '123-12-123' },
//   { name: 'jill', phone: '123-133-123' }
// ]

// cl(contacts[2].phone)

// var vehicles = {
//  cars: [
//    { make: 'Chevrolet', model: 'Malibu' },
//    { make: 'Ford', model: 'Focus' }
//  ],
//  trucks: [
//    { make: 'Chevrolet', model: 'Silverado' },
//    { make: 'Toyota', model: 'Tacoma' },
//    { make: 'Ford', model: 'F-150' }
//  ]
// }

// cl(vehicles.trucks[2].model)

// JSON JS object notation 

// {
//   "firstName": "john",
//   "age": 2
// }

// var person = JSON.parse({first: 'asf', age: 2})

// DOM 
// Document Object Model 