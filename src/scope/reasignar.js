// Clase 4: Reasignación y redeclaración

var firstName; // Undefined
firstName = 'Oscar';
console.log(firstName);

var lastName = "David"; // declarando / asignando
lastName = 'Ana'; // reasignando
console.log(lastName); 

var secondName = 'David'; // declarando / asignando
var secondName = 'Ana'; // reasignado
console.log(secondName);

// Let
let fruit = 'Apple' // declara y asignar
fruit = 'Kiwi'; // reasignar
console.log(fruit);

let fruit = 'Banana';
console.log(fruit);

// const
const animal = 'dog'; // declara y asigna
// animal = 'cat'; // reasignado
const animal = 'Snake';
console.log(animal);

const vehicles = [];
vehicles.push("🚗");
console.log(vehicles);

vehicles.pop();
console.log(vehicles);