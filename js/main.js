let nombre = "Juan";
let edad = 36;
let esMayorDeEdad = edad >= 18;
const TAU = 3.14159265358979323846;

edad = 37;
console.log('Hola ' + nombre + ' tienes ' + edad + ' años');

function saludar(nombre="Mundo") {
    alert("Hola " + nombre);
}

saludar();
saludar(nombre);
saludar("Ana");