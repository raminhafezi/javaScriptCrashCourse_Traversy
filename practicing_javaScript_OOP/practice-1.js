// console.log("hi")

// 2- Constructor
// -----------------------------------------------------
// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;

//     this.getSummary = function() {
//         return `Book named "${this.title}" was written by "${this.author}" in "${this.year}"`;
//     }
// }

// const book1 = new Book("learning JavaScript", "Ramin Hafezi", "2021");
// const book2 = new Book("Practical Docker skill", "Ramin Hafezi", "2025");

// console.log(Object.values(book2));




// 3- Prototype
// // // All JavaScript objects inherit properties and methods from a prototype.
// // Sometimes you want to add new properties (or methods) to all existing objects of a given type.
// // Sometimes you want to add new properties (or methods) to an object constructor.
// // The JavaScript prototype property allows you to add new properties to object constructors:
// // The JavaScript prototype property also allows you to add new methods to objects constructors:
// // -----------------------------------------------------
// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;}

// Book.prototype.getSummary = function(){
//            return `Book named "${this.title}" was written by "${this.author}" in "${this.year}"`;}

// Book.prototype.publisher = "O'Reilly"
// Book.prototype.setPublisher = function(publisher) {
//     this.publisher = publisher
// }
// const book1 = new Book("learning JavaScript", "Ramin Hafezi", "2021");
// const book2 = new Book("Practical Docker skill", "Ramin Hafezi", "2025");

// console.log(book1.getSummary())
// book2.publisher = "Microsoft"
// console.log(book2.publisher)
// console.log(book1.publisher)


// // 3- Inheritance
// // we want to create another Object named Magazine that inheritance methods and properties from Book
// // -----------------------------------------------------

// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;}

// Book.prototype.getSummary = function(){
//            return `Book named "${this.title}" was written by "${this.author}" in "${this.year}"`;}

// function Magazine(title, author, year, month) {
//     Book.call(this, title, author, year);

//     this.month = month
// }

// // instantiate magazine object
// // in order to inherite the fucntion of the Object
// // this line must be placed before the instantiation of the Object.
// Magazine.prototype = Object.create(Book.prototype)

// const mag1 = new Magazine("Mag one", "J.Fla", "2015", "November");
// console.log(mag1)
// // console.log(mag1.getSummary()) // Return an error


// console.log(mag1.getSummary())


// // 4- Object Create
// // 
// // -----------------------------------------------------
