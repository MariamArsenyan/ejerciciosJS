function run1_1() {
  const add = (a, b) => a + b;
  console.log("Resultado de add(3, 5):", add(3, 5));
}

function run1_2() {
  const randomNumber = () => Math.floor(Math.random() * 101);
  console.log("Número aleatorio entre 0 y 100:", randomNumber());
}

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
