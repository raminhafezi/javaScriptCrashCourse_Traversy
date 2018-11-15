// var greeting;
// console.log(greeting)

// greeting = "Hello, How are you?"

// console.log(greeting)


// // Const
// const name = "John"
// console.log(name)

// re-assign
// name = "Johni"  // return error
// console.log(name)

// //// Cosnt in object

// const person = {
//     name : "Jogn",
//     age : 35
// };
// console.log(person.name)
// person.name = "Mark" // possible
// console.log(person.name)

// // // same applied to the array

// const number = [1, 2, 3, 4, 5]
// console.log(number)

// number.push(12) // possible option
// console.log(number)

//================================= Primitive Types

// // 1- Number
// const num = 124445
// console.log(typeof num)
 
// // 2- String
// const name = "Ramin"
// console.log(typeof name)

// // 3- Boolean
// const stat = false
// console.log(stat)

// // 4- null
// const nill = null
// console.log(typeof nill) //return object

// // 5- undefined
// let test
// console.log(test)

// // 6- symbol
// const symb = Symbol();
// console.log("symb: ", typeof symb)



// // ======================Reference type

// // 1- Array
// const fruits = ["banana", "apple", "mandarine"]
// console.log(typeof fruits) // return object


// // 2- dictionary
// const my_fruits = {
//     1: "banana",
//     2: "apple",
//     3: "mandarine"
// }
// console.log(typeof fruits) // return object

// const today = new Date()
// console.log(typeof today) //return object



// ======================== Type Conversion

// // // convert to String

// let val

// // convert number to string
// console.log("convert number to string")

// val = String(555)
// console.log(val)
// console.log(typeof val)
// console.log(val.length)


// val = String(4 + 4)
// console.log(val)
// console.log(typeof val)
// console.log(val.length)

// val = String(true)
// console.log(val)
// console.log(typeof val)
// console.log(val.length)

// val = String(new Date())
// console.log(val)
// console.log(typeof val)
// console.log(val.length)

// val = String([1, 2, 3, 4, 5])
// console.log(val)
// console.log(typeof val)
// console.log(val.length)


// WE CAN ALSO USE ().toString() works exactly the same as String()

// // ================= Convert string to number
// console.log("Convert string to number")


// val = "5"
// // console.log(val)  //generate error

// val = Number("5")
// console.log(val)  // correct
// console.log(typeof val)


// val = Number(true)
// console.log(val)  // return 1
// console.log(typeof val) // return number

// val = Number(false)
// console.log(val)  // return 0
// console.log(typeof val) // return number


// val = Number("hello")
// console.log(val)  // return NAN (Not A Number)
// console.log(typeof val) // return number

// val = Number([1,2,3,4,5,6,7,8])
// console.log(val)  // return NAN (Not A Number)
// console.log(typeof val) // return number

// // we can also use parsInt("100") or parsFloat("1000.12")



// // // ======================== Numbers and Math Object

// // generate random numbers
// let random = Math.random() //random decimal [0-1]
// console.log(random)


// random = Math.random()*20 //random decimal [0-19]
// console.log(random)


// random = Math.random()*20 + 1 //random decimal [0-20]
// console.log(random)

// random = Math.floor(Math.random()*20 + 1) //random [0-20]
// console.log(random)




// ========================= Template Literals ===========

// // we want to insrt element into the Html page
// //  we have two methods, with template and without template
// // template supported in es6

// const name = "ramin";
// const age = "34";
// const job = "customer support";
// const city = "Sydney";
// let html;

// // // without template
// // html = "<ul>" +
// //             "<li>Name: " + name + "</li>" +
// //             "<li>age: " + age + "</li>" +
// //             "<li>job: " + job + "</li>" +
// //             "<li>city: " + city + "</li>" +
// //         "</ul>";
// // document.body.innerHTML = html;

// // with template
// html = `<ul>
//             <li>Name: ${name} </li>
//             <li>age:  ${age}</li> 
//             <li>job:  ${job} </li>
//             <li>city:  ${city}</li> 
//             <li>${age > 30 ? 'over 30' : 'under 30'}</li>
//             <li>${'hello '+name.toUpperCase()}</li>
//         </ul>`;


// document.body.innerHTML = html;

// // using template is much better we can use function and if statement ,,,,, in the ${}


// ================================= Array & array Methods ======================
//  two ways to decalre array
// 1)
const numbers = [1, 2, 3, 4, 5, 8, 90, "qwdf", new Date()];

// 2)
const number = new Array(1, 23, 5, 78, 9, "string", true, "sample".length)

console.log(number)
console.log(numbers)


// check if something is array
console.log(Array.isArray(numbers))

// find the index of the array
console.log(numbers.indexOf(8))

// Add to array end
number.push(12)

// add to the front
number.unshift("Ramin")

console.log(number)
    
// pop from end
console.log(number.pop())

// pop from front
console.log(number.shift())


console.log(number.sort()) // [1, 23, 5, 6, 78, 9, "string", true]
                            // which is wrong, just sort the first number, not all of the array
                            // https://www.geeksforgeeks.org/javascript-array-sort/

//  how to sort entire array ----DES
val = number.sort(function (x, y) {
    return x - y;
})

//  how to sort entire array ---- ASC
val = number.sort(function (x, y) {
    return y-x;
})



console.log(val)



