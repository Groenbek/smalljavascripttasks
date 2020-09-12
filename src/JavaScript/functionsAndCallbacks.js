// 1 Function declaration

function add(n1, n2) {
    return n1 + n2;
}

// Function expression
var sub = function(n1, n2) {
    return n1 - n2;
}

/*
// Callback example
var cb = function(n1, n2, callback) {
    return "Result from the two numbers: " +n1 + " + " +n2+ " = " + callback(n1,n2);
}

// 2 Call the functions and observe whats happening
console.log( add(1,2)) // result = 3
console.log(add) // result = [Funktion: add]
console.log(add(1,2,3)); // result 3
console.log(add(1)); // result = NaN
console.log(cb(3,3,add)); // result = Result from the two numbers: 3 + 3 + 6
console.log(cb(4,3,sub)); // result = Result from the two numbers: 4 + 3 = 1
// console.log(cb(3,3,add()));  // result = Type error callback is not a function
console.log(cb(3,"hh", add)); // result = Result from the two numbers: 3 + hh = 3hh
*/

// 3 Error Handling
//try {
//var cb = function(n1, n2, n3, callback) {
//    return "Result from the three numbers: " +n1 + " + " +n2+ " + " + n3 + " = " + callback(n1,n2);
//}catch (Exception e) {
// return null;   
//}

// Getting comfortable with filter, map and forEach
//1 Array with Lars, Jan, Peter, Bo, Frederik
var personarray = ["Lars", "Jan", "Peter", "Bo", "Frederik"]
console.log("All names: " + personarray)
// lets make it pretty
console.log("But even prettier: " + personarray.join(", "))

console.log("Navne med maks 3 bogstaver: ")
var shortNames = personarray.filter(x=>x.length<=3)
shortNames.forEach(x=>console.log(x))

// LETS MAKE IT ALL UPPERCASE
const uppercased = personarray.map(personarray => personarray.toUpperCase());

console.log("LETS YELL IT: " + uppercased);

// Let's turn those names into HTML
var toHTML ="<ul>" + personarray.map((x)=>"<li>" + x + "</li>") + "</ul>"
console.log(toHTML)

var toHTMLOrder = personarray.map((x)=>"<li>" + x + "</li>")
toHTMLOrder.unshift("<ul>")
toHTMLOrder.push("</ul>")
console.log(toHTMLOrder.join(""))

// 4 A lot of cars
var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];
console.log("Wuuhuuu cars newer than 1999: ")
console.log(cars.filter(x=> x.year > 1999))
console.log("Lets get all the volvos: ")
console.log(cars.filter(x=> x.make == "Volvo"))
console.log("All cars under the cheap cheap price of 5000: ")
console.log(cars.filter(x=> x.price < 5000))

console.log("Lets get this shizzle in SQL: ")
carsInSQL = cars.filter(x => x.year > 1999).map(x=> 'INSERT INTO cars (id, year, make, model, price) VALUES (' + x.id + ", " + x.year + ", " + x.make + ", " + x.model  + ", " + x.price)
console.log(carsInSQL.join(""))