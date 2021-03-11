/* Consegna
V Il computer deve generare 16 numeri casuali tra 1 e 100.
V I numeri non possono essere duplicati. V
V In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
V L’utente non può inserire più volte lo stesso numero. 
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50 */

//Definisco le funzioni

/** 
 * getRndInteger - genera un numero random
 * 
 * @param  {number} min //numero minimo 
 * @param  {number} max //numero massimo
 * @return {number} //un numero randoma tra il numero max e min
*/
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

/** 
 * inArray - verifica che un elemento sia contenuto in un array
 * 
 * @param  {var} array //nome dell'array dove vado a cercare 
 * @param  {item} elemento //elemento da cercare all'interno dell'array
 * @return {true / false} //se è contenuto true altrimenti false
*/
function inArray(array, elemento) {
    var i = 0;
    while ( i < array.length ) {
        if (array[i]== elemento ) {
            return true;
        }
        i++;
    }
    return false;
}

// Chiedo all'utente il grado di difficoltà
do {
    var level = parseInt(prompt('Scegli un livello di difficoltà tra 0, 1 o 2.'));
} while ( isNaN(level) || level < 1 || level > 2 );


var rangeMax;

switch (level) {
    case 0:
        rangeMax = 100;
    break;

    case 1:
        rangeMax = 80;
    break;

    case 2:
        rangeMax = 50;
    break;
}

//Genero 16 numeri casuali tra 1 e 100
var bomba;
var bombe = [];

//Fino a quando il numero non è incluso nell'array e la lunghezza dell'array è minore di 16 allora...
while ( bombe.length < 16 )  {
    //...genero un numero
    bomba = getRndInteger(1, rangeMax);
    //verifico che non sia nell'array
    if ( inArray(bombe, bomba ) == false) {
         //Lo inserisco nell'array
    bombe.push(bomba);
    }
}

//Chiedo all'utente di inserire un numero compreso da 1 e maxRange
var numeriUtente = [];
var bombaEsplosa = false;
var possibility = rangeMax - 16;

while ( numeriUtente.length < possibility && bombaEsplosa == false ) {
    var numero = parseInt(prompt('inserisci un numero tra 1 e ' + rangeMax));

    if ( isNaN(numero) || numero < 1 || numero > rangeMax ) {
        alert('Non hai inserito un numero valido, riprova.');
    } else if ( bombe.includes(numero) == true ) {
        bombaEsplosa = true;
    } else if (numeriUtente.includes(numero) == false) {
        numeriUtente.push(numero);
    }
}

if (bombaEsplosa == true) {
    console.log('Hai preso la bomba dopo aver fatto ' + numeriUtente.length + ' passi.');
} else {
    console.log('Bravo, hai vinto!');
}