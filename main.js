// Declarar una variable bandas y asignarle un array con tus bandas favoritas (al menos 5).
// Guardar en variables el valor del primero, tercero y sexto elemento del array.
// Mostrar por consola los siguientes 3 mensajes: La banda en primer lugar es:
// [NOMBRE_DE_LA_PRIMERA_BANDA] La banda en tercer lugar es: [NOMBRE_DE_LA_TERCERA_BANDA] La banda en sexto lugar es: [NOMBRE_DE_LA_QUINTA_BANDA]

const bandas = [
  "Miranda",
  "Madonna",
  "Soda Stereo",
  "Muse",
  "Maroon 5",
  "Los Redonditos de Ricotas",
  "Lali Esposito",
];
// 0      1         2               3           4           5                           6

const bandaUno = bandas[0];
console.log(bandaUno);

const bandaTres = bandas[2];
const bandaSeis = bandas[5];

console.log("La banda en primer lugar es ", bandaUno);
console.log("La banda en tercer lugar es", bandaTres);
console.log("La banda en sexto lugar es", bandaSeis);

/////////
// Crear un array con el nombre notas y asignar un array con 10 valores numéricos de 1 a 10.
// Hacer una funcion sumarNotas() que reciba el array como argumento y retorne la suma de todas.
// Hacer una funcion calcularPromedio() que reciba el array como argumento y retorne el promedio de notas (podes utilizar sumarNotas() para reutilizar codigo).

const notas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let suma = 0;

const sumarNotas = () => {
  for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    suma = suma + nota;
  }
  return suma;
};

const calcularPromedio = () => {
  sumarNotas();
  promedio = suma / notas.length;
  return promedio;
};

console.log(calcularPromedio());

// Declarar el array playlist

// Recorrer la lista de canciones con un ciclo for y mostrarlas en consola
// De inicio a fin
// De fin a inicio

const playlist = [
  "Concrete and Gold",
  "The Line",
  "Sunday Rain",
  "Happy Ever After (Zero Hour)",
  "Arrows",
  "Dirty Water",
  "La Dee Da",
  "The Sky Is a Neighborhood",
  "Make It Right",
  "Run",
  "T-Shirt",
];
// const reversed = pla.reverse();
// console.log('reversed:', reversed);

// for (let i = 0; i < playlist.length; i++) {
//   console.log(playlist[i]);
// }

// const finInicio = playlist.reverse();
// for (let i = 0; i < finInicio.length; i++) {
//   console.log(finInicio[i]);
// }

// Crear una funcion obtenerNumeroAlAzar() que retorne un numero del 0 al 5 al azar.
// Declarar el array items con los siguientes valores: '🍉', '🍐', '🍌', '🍇', '🍎', '🍊'
// Crear la funcion obtenerFrutaAlAzar() que reciba como argumento items y retorne una fruta del array, usando la funcion obtenerNumeroAlAzar.

// console.log(obtenerNumeroAlAzar());
const frutitas = ["🍉", "🍐", "🍌", "🍇", "🍎", "🍊"];
const obtenerNumeroAlAzar = () => {
  return Math.floor(Math.random() * frutitas.length);
};

const obtenerFrutaAlAzar = (frutitas) => {
  return frutitas[obtenerNumeroAlAzar()];
};

// console.log(obtenerFrutaAlAzar());

// Declara la variable listaDeFrutas como un array vacio
// Usando la funcion obtenerFrutaAlAzar(), asigna una fruta en la posicion 0 del array listaDeFrutas
// Hace lo mismo para las posiciones 1, 2, 3 y 4.
// Al final te va a quedar un array con 5 frutas al azar. Pero el codigo esta algo repetitivo, no? Podemos mejorarlo reemplazando esa asignación con un for.

let listaDeFrutas = [];

// listaDeFrutas[0] = obtenerFrutaAlAzar(frutitas);
// listaDeFrutas[1] = obtenerFrutaAlAzar(frutitas);
// listaDeFrutas[2] = obtenerFrutaAlAzar(frutitas);
// listaDeFrutas[3] = obtenerFrutaAlAzar(frutitas);
// listaDeFrutas[4] = obtenerFrutaAlAzar(frutitas);

// const reemplazarValorFruta = (frutitas) => {
//   for (let i = 0; i < listaDeFrutas.length; i++) {
//     i = listaDeFrutas[obtenerFrutaAlAzar(frutitas)];
//   }
//   return i;
// };

for (let index = 0; index < 5; index++) {
  listaDeFrutas[index] = obtenerFrutaAlAzar(frutitas);
}
console.log(listaDeFrutas);
// console.log(listaDeFrutas[0]);
// console.log(listaDeFrutas[1]);
// console.log(listaDeFrutas[2]);
// console.log(listaDeFrutas[3]);
// console.log(listaDeFrutas[4]);

// Declarar la variable otraListaDeFrutas como un array vacio.
// Hacer un for que cuente 5 numeros (desde 0 hasta 4, o desde 1 hasta 5). (sin recorrer un array)
// En cada iteracion, llamar a la funcion obtenerFrutaAlAzar y asignar la fruta al array otraListaDeFrutas.
