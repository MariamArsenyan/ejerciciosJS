//Conversión de funciones
function run1_1() {
  const add = (a, b) => a + b;
  console.log("Resultado de add(3, 5):", add(3, 5));
}

//Función de flecha sin parámetros
function run1_2() {
  const randomNumber = () => Math.floor(Math.random() * 101);
  console.log("Número aleatorio entre 0 y 100:", randomNumber());
}

//Uso de 'this' en las funciones de flecha
function run1_3() {
  class Person {
    constructor(name) {
      this.name = name;
    }
    
    greet = () => {
      console.log(`Hola, ${this.name}`);
    }
  }

  const person = new Person("Juan");
  person.greet();
}

//Función de flecha dentro de un loop
function run1_4() {
  const printNumbers = (numbers) => {
    numbers.forEach(number => console.log(number));
  };
  printNumbers([1, 2, 3, 4, 5]);
}

//Función de flecha con 'setTimeout'
function run1_5() {
  setTimeout(() => console.log("Mensaje después de 3 segundos"), 3000);
}

//ternario básico
function run2_1() {
  const puedeConducir = (edad) => edad >= 18 ? "Puedes conducir" : "No puedes conducir";
  console.log("Edad 20:", puedeConducir(20));
  console.log("Edad 16:", puedeConducir(16));
}

//Comparación de dos números
function run2_2() {
  const mayor = (num1, num2) => num1 > num2 ? "num1 es mayor" : "num2 es mayor";
  console.log("Comparación 5 y 10:", mayor(5, 10));
}

//Número positivo, negativo o cero
function run2_3() {
  const determinarSigno = (num) => num > 0 ? "Positivo" : num < 0 ? "Negativo" : "Cero";
  console.log("Número -5:", determinarSigno(-5));
}

//Encontrar el máximo de tres números
function run2_4() {
  const encontrarMaximo = (a, b, c) => (a > b ? (a > c ? a : c) : (b > c ? b : c));
  console.log("Máximo de (3, 7, 5):", encontrarMaximo(3, 7, 5));
}

// par o impar en un array
function run2_5() {
  const parOImpar = (numeros) => numeros.map(num => num % 2 === 0 ? "par" : "impar");
  console.log("Array [1, 2, 3, 4]:", parOImpar([1, 2, 3, 4]));
}


//Callback
function run3_1() {
  const procesar = (numero, callback) => callback(numero);
  const mostrarNumero = (num) => console.log("Número:", num);
  procesar(5, mostrarNumero);
}

//Callbacks con operaciones math
function run3_2() {
  const calculadora = (a, b, callback) => callback(a, b);
  const suma = (x, y) => x + y;
  console.log("Suma de 5 y 10:", calculadora(5, 10, suma));
}

// Callback en funciones asínc
function ejercicio3_3() {
  const esperarISaludar = (nombre, callback) => {
    setTimeout(() => callback(nombre), 2000);
  };
  esperarISaludar("Juan", (nombre) => console.log(`Hola, ${nombre}`));
}

//Callbacks con arrays
function ejercicio3_4() {
  const procesarElements = (array, callback) => {
    array.forEach(element => callback(element));
  };
  procesarElements(["a", "b", "c"], (el) => console.log(el));
}

//Procesar cadena con callback
function ejercicio3_5() {
  const procesarCadena = (str, callback) => callback(str);
  const enMayusculas = (str) => str.toUpperCase();
  console.log("Convertir 'hola' a mayúsculas:", procesarCadena("hola", enMayusculas));
}
//Operador Spread en Arrays
const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8]; 

const array3 = [...array1, array2];
console.log(array3)

//Operador Rest en Funciones
function suma(...numeros) {
  return numeros.reduce((total, num) => total + num, 0);
}
console.log(suma(1, 2, 3, 4)); 

//Copiando objetos con Spread
const coche = {
  marca: 'bmw',
  modelo: 'x6',
  puertas: 2
}
const motor = {
  cilandros: 4,
  caballos: 220
}
const deportivo = {...coche, ...motor};
console.log(deportivo, coche);

//Resto en Destructuring
const array = [ 1, 'abc', 44, 'lalala', false];
const [ firstEl, secondEl, ...otherEl ]  = array; 

console.log(firstEl)
console.log(secondEl)
console.log(...otherEl)

// Array transformations

//Map
const arrayM = [ 1, 2, 3, 4];
const newArray = arrayM.map(Math.sqrt)
console.log(newArray);

//Filter
const arrayF = [1, 2, 3, 4];
const pares = arrayF.filter(num => num % 2 === 0);

console.log(pares); 

//Find
const arrayFind = [1, 10, 8, 11];
const newFind = arrayFind.find(num => num > 10);

console.log(newFind); 

//Redduccion 
const arrayR = [13, 7, 8, 21];
const sumaTotal = arrayR.reduce((total, num) => total + num, 0);

console.log(sumaTotal); 

//Nivel 2

const numeros = [ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ];
const newN = arr => arr.filter(num => num >= 10).map(num => num * 2).reduce((total, num) => total + num, 0);

console.log(newN(numeros)); 

//Array loops

//forEach
const nombres = ['Anna', 'Bernat', 'Clara'];
nombres.forEach(nombre => console.log(nombre));


//for-of
const noms = ['Anna', 'Bernat', 'Clara'];
for (let nombre of noms) {
    console.log(nombre);
}

//filtro 
const num = [1, 2, 3, 4, 5, 6];
const numerosPar = numeros.filter(num => num % 2 === 0);
console.log(numerosPar); 

//for-in
const person = { 
  nombre: 'Ola', 
  edad: 25,
  ciudad: 'Barcelona' 
};

for (let clave in person) {
    console.log(`${clave}: ${person[clave]}`);
}

//for-of con break
const numeros2 = [1, 2, 3, 4, 5, 6];
for (let num of numeros2) {
    if (num === 5) {
        break;
    }
    console.log(num);
}


//Promisas & Async/Await

//Creación de una Promesa
const promesaHolaMundo = new Promise((resolve) => {
  setTimeout(() => resolve("Hola, mundo"), 2000);
});

//Utilización de una Promesa:
promesaHolaMundo.then(resultado => console.log(resultado));

//Promesa con reject
function verificarHola(input) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          if (input === "Hola") {
              resolve("Hola");
          } else {
              reject("Error");
          }
      }, 2000);
  });
}
