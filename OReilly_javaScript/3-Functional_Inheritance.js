// Privileged Method is a function that has access to secret information
// Privileged Method has access to private variables and private methodds
// Privileged Method obtains its secret informaiton through closure


// Lets have a look at a common way to define the classical inheritance

// function Gizmo(id){
//     this.id = id;};

// Gizmo.prototype.toString = function() {
//     return "gizmo " + this.id;};


// function Hoozit(id) {
//     this.id = id;};

// Hoozit.prototype = new Gizmo();
// Hoozit.prototype.test = function(id) {
//     return this.id === id;};

// // Here is the other way to write the above code. we call this as prototype inheritance

function gizmo(id) {
    return {
        id: id,         // If I want to keep id secret, I can remove this line, and access to gizmo id via hoozit
        toString : function() {
            return "gizmo" + this.id
        }
    };
}

// here is the power constructor, we do not new "NEW" in this way
function hoozit(id) {
    var that = gizmo(id); // this is a private variable
    that.test = function(testid) { //this is the private method
        return testid === this.id;
    };
    return that;
}

console.log(gizmo(12).toString()) //gizmo12
var my_hooz = new hoozit(25)
console.log(my_hooz.toString()) //gizmo25
console.log(my_hooz.test()) //False
console.log(Date.now())
var d = new Date()
console.log(d.toString("YYYY-MM"))
