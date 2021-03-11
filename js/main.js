// SNACK 1

// crea un array di oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine.

var zucchine = [
 {"varietà": 'verde', "peso": 100, "lunghezza": 23},
 {"varietà": 'gialla', "peso": 150, "lunghezza": 25},
 {"varietà": 'blu', "peso": 300, "lunghezza": 26},
 {"varietà": 'blu', "peso": 135, "lunghezza": 15},
 {"varietà": 'blu', "peso": 200, "lunghezza": 10},
 {"varietà": 'blu', "peso": 230, "lunghezza": 11},
 {"varietà": 'blu', "peso": 210, "lunghezza": 22},
 {"varietà": 'blu', "peso": 300, "lunghezza": 25},
 {"varietà": 'blu', "peso": 120, "lunghezza": 10},
 {"varietà": 'blu', "peso": 110, "lunghezza": 11},
]

var peso = 0;

for (var i = 0; i < zucchine.length; i++) {
 peso += zucchine[i].peso;
}

console.log("Tutte le zucchine pesano" + " " + peso + " grammi");

// SNACK 2

//  Crea 10 oggetti che rappresentano una zucchina.

// var zucchine = [
//  {"varietà": 'verde', "peso": 100, "lunghezza": 23},
//  {"varietà": 'gialla', "peso": 150, "lunghezza": 25},
//  {"varietà": 'blu', "peso": 300, "lunghezza": 26},
//  {"varietà": 'blu', "peso": 135, "lunghezza": 15},
//  {"varietà": 'blu', "peso": 200, "lunghezza": 13},
//  {"varietà": 'blu', "peso": 230, "lunghezza": 11},
//  {"varietà": 'blu', "peso": 210, "lunghezza": 22},
//  {"varietà": 'blu', "peso": 300, "lunghezza": 25},
//  {"varietà": 'blu', "peso": 120, "lunghezza": 10},
//  {"varietà": 'blu', "peso": 110, "lunghezza": 12},
// ]

// // Dividi in due array separati le zucchine che misurano
// // meno o più di 15cm 

// var zucchineCorte = [];
// var zucchineLunghe = [];

// for (var i = 0; i < zucchine.length; i++) {
//  if(zucchine[i].lunghezza < 15) {
//   zucchineCorte.push(zucchine[i].lunghezza);
//  }
//  else {
//   zucchineLunghe.push(zucchine[i].lunghezza);
//  }
// }
// console.log("Le zucchine corte misurano " + zucchineCorte + " centimetri");
// console.log("Le zucchine lunghe misurano " + zucchineLunghe + " centimetri");



// Infine stampa separatamente quanto pesano i due gruppi
// di zucchine



// SNACK 3

// Scrivi una funzione che accetti una stringa come
// argomento e la ritorni girata

// var reversed = prompt("Inserisci una parola");

// function reverseString(invertita) {

//  var invertita = invertita.split("").reverse().join(""); 
 
//  return invertita; 
// }

// reverseString(reversed);
// console.log(reverseString(reversed));