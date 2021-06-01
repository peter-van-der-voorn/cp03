const transform = require('./transform.js')
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const yourArray = [5, 10, 15, 20]

console.log("Welcome to TRANSFORM!")
console.log("This useful program takes two arrays of integers, multiply each number with each of the numbers in the other array, then checks to see if the sesult of each multiplication is even, and if it is even, then it adds those even reults together! Wow so useful!")
console.log('--------------------')
console.log("Array #1: " + myArray)
console.log("Array #2: " + yourArray)
console.log('--------------------')
console.log("....and the result is.....")
console.log(transform(myArray, yourArray))
console.log('Wow! How did we ever exist without this program?!🤪')

