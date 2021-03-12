// SNACK 1

// crea un array di oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine.

// var zucchine = [
//  {"varietà": 'verde', "peso": 100, "lunghezza": 23},
//  {"varietà": 'gialla', "peso": 150, "lunghezza": 25},
//  {"varietà": 'blu', "peso": 300, "lunghezza": 26},
//  {"varietà": 'blu', "peso": 135, "lunghezza": 15},
//  {"varietà": 'blu', "peso": 200, "lunghezza": 10},
//  {"varietà": 'blu', "peso": 230, "lunghezza": 11},
//  {"varietà": 'blu', "peso": 210, "lunghezza": 22},
//  {"varietà": 'blu', "peso": 300, "lunghezza": 25},
//  {"varietà": 'blu', "peso": 120, "lunghezza": 10},
//  {"varietà": 'blu', "peso": 110, "lunghezza": 11},
// ]

// var peso = 0;

// for (var i = 0; i < zucchine.length; i++) {
//  peso += zucchine[i].peso;
// }

// console.log("Tutte le zucchine pesano" + " " + peso + " grammi");

// SNACK 2

//  Crea 10 oggetti che rappresentano una zucchina.

// var zucchine = [
//  {"varietà": 'a', "peso": 100, "lunghezza": 23},
//  {"varietà": 'b', "peso": 150, "lunghezza": 25},
//  {"varietà": 'c', "peso": 300, "lunghezza": 26},
//  {"varietà": 'd', "peso": 135, "lunghezza": 15},
//  {"varietà": 'e', "peso": 200, "lunghezza": 13},
//  {"varietà": 'f', "peso": 230, "lunghezza": 11},
//  {"varietà": 'g', "peso": 210, "lunghezza": 22},
//  {"varietà": 'h', "peso": 300, "lunghezza": 25},
//  {"varietà": 'i', "peso": 120, "lunghezza": 10},
//  {"varietà": 'l', "peso": 110, "lunghezza": 12},
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



// // Infine stampa separatamente quanto pesano i due gruppi
// // di zucchine

// var pesoLunghe = 0;
// var pesoCorte = 0; 

// for (var i = 0; i < zucchineLunghe.length; i++) {
//  pesoLunghe += zucchineLunghe[i].peso;
// }
// for (var i = 0; i < zucchineCorte.length; i++) {
//  pesoCorte += zucchineCorte[i].peso;
// }


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

// SNACK 4
// Generatore di “nomi cognomi” casuali: prendendo una lista
// di nomi e una lista di cognomi, Gatsby vuole generare una
// falsa lista di 3 invitati.

 nomi = ["Marco", "Stefano", "Sebastiano", "Laura", "Michela"];
 cognomi = ["Lepore", "Tosatto", "Pasca", "Caldaronello", "Piras"];
 arrayInvitati = [];
 listaNomi = nomi[Math.floor(Math.random()*nomi.length)];
 listaCognomi = cognomi[Math.floor(Math.random()*cognomi.length)];

arrayInvitati.push(listaNomi);
arrayInvitati.push(listaCognomi);

console.log(arrayInvitati);

// SNACK 5
// Crea un array di numeri interi e fai la somma di tutti gli
// elementi che sono in posizione dispari

var numberArray = [43, 54, 6, 34, 21, 295, 3, 45];
var somma = 0;

for (var i = 0; i < numberArray.length; i += 1) {
  somma += numberArray[i];
}
console.log(somma);

// SNACK 6
// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.



// SNACK 7
// Scrivi una funzione che fonda due array (aventi lo stesso
// numero di elementi) prendendo alternativamente gli
// elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].




// SNACK 8
// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al
// massimo quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che
// hanno la posizione compresa tra “a” e “b”