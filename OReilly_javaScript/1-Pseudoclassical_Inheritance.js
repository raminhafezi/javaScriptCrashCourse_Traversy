// New Operator
const initializer = "Initializer"

// Define constructor.
function Constructor () {
    this.member = initializer;
    return this
}

// Add methods to the construtor
Constructor.prototype.firstMethod = function() {
    return "here is the first method that add to the constructor, out_side of the constructor definition"
}

Constructor.prototype.secondMethod = function() {
    return "here is the second method that add to the constructor, out_side of the constructor definition"
}

// Making new Object
var newObject = new Constructor();

console.log(newObject.firstMethod())
console.log(newObject.secondMethod())


// We also can inherite the constructor, a use case for this is to hide the property of the 
// constructor
function Gizmo(id) {
    this.id = id;}

Gizmo.prototype.toString = function() {
    return "gizmo "+ this.id;}

function Hoozit(id) {
    this.id = id;}


Hoozit.prototype = new Gizmo();
Hoozit.prototype.test = function (id) {
    return this.id ===id; // We have access to id from Gizmo in here
};


