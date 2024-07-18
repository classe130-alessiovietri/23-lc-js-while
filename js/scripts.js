// for (
//     let i = 0;          // Inizializzazione del contatore
//     i < 10;             // Condizione di permanenza
//     i++                 // Modalità di avanzamento
// ) {
//     console.log(i);
// }

/* 
    -------------------------------------
*/

// let i = 0;
// while (i < 10) {
//     console.log(i);

//     i++;
// }

/* 
    -------------------------------------
*/

// Chiedi numeri all'utente finché non ho raggiunto la somma di 100
// let sum = 0;

// while (sum < 100) {
//     const userNumber = parseInt(prompt('Inserisci un numero:'));

//     // sum = sum + userNumber;
//     sum += userNumber;
// }

// let userNumber = 0;
// for (sum; sum < 100; sum += userNumber) {
//     userNumber = parseInt(prompt('Inserisci un numero:'));

//     // sum = sum + userNumber;
//     // sum += userNumber;
// }

// for (sum; sum < 100; sum) {
//     const userNumber = parseInt(prompt('Inserisci un numero:'));

//     // sum = sum + userNumber;
//     sum += userNumber;
// }

// console.log('Somma raggiunta:', sum);

/* 
    -------------------------------------
*/

// const km = parseInt(prompt('Inserisci il numero di KM:'));

// if (isNaN(km)) {
//     alert('SCL');
// }
// else {
//     const price = km * 0.21;
//     alert('Il prezzo del biglietto è ' + price);
// }

/* 
    SOLUZIONE DI ALESSIO
*/
// let km = parseInt(prompt('Inserisci il numero di KM:'));

// while (isNaN(km)) {
//     km = parseInt(prompt('Valore non valido! Inserisci il numero di KM:'));
// }

// const price = km * 0.21;
// alert('Il prezzo del biglietto è ' + price);

/* 
    SOLUZIONE DI ANTONIO
*/
// let km;
// let check = true;
// while (check) {
//     km = parseInt(prompt('Inserisci il numero di KM:'));

//     if (!isNaN(km)) {
//         check = false;
//     }
// }

// const price = km * 0.21;
// alert('Il prezzo del biglietto è ' + price);

/* 
    SOLUZIONE CON DO-WHILE
*/

let km;

do {
    km = parseInt(prompt('Inserisci il numero di KM:'));
} while (isNaN(km));

const price = km * 0.21;
alert('Il prezzo del biglietto è ' + price);
