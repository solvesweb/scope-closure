// Clase 1: Global Scope

var a; // Declarando
var b = 'b'; // Declaramos y asignamos
b = 'bb'; // Reasignación
var a = 'aa' // Redeclaración

// Global Scope
var fruit = 'Apple'; // Global

function bestFruit() {
    console.log(fruit);
}

bestFruit();

function countries() {
    country = 'Spain'; // Global
    console.log(country);
}

countries();
console.log(country);