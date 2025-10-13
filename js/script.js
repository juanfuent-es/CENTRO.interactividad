// Así se declara una variable
var nombre = "Juan"; // string - tipo cadena de texto
let edad = 36;
const PI = Math.PI; // float - tipo flotante
const TAU = Math.PI * 2; // float - tipo flotante

// Valor booleano - Tipos de variable que pueden ser true o false
let esMayorDeEdad = edad >= 18; // Variable formato camelcase

nombre = "Luis";
// Así se declara una función
function saludar(_nombre="Mundo") {
    // Así se declara un parámetro de una función
    alert("Hola " + _nombre);
}
// Así se llama a una función
saludar(); // Llamada a una función sin parámetros
// Llamada a una función con un parámetro
saludar(nombre);
saludar("Ana");