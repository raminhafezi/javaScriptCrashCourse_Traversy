// console.log("Hi")

//  Syntax to create new Object
// var newObject = Object.create(oldObject);
// Mozila calls it __proto___

var oldObject = {
    firstMethod : function() {
        return "here is the firstMethod in oldObject"
    },
    secondMethod : function() {
        return "Here is the secondMethod in oldObject"
    }
};

var newObject = Object.create(oldObject);
newObject.thirdMethod = function() {
    return "Here is the thirdMethod in newObject"
};

var new_newObject = Object.create(newObject);
new_newObject.forthMethod = function() {
    return "Here is the forthMethod in new_newObject"
};

console.log(newObject.firstMethod())
console.log(newObject.thirdMethod())
console.log(new_newObject.secondMethod())
console.log(new_newObject.forthMethod())

