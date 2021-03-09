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

// var resultInArrayUser = inArray(userNumbers, userNumber);

// var UserNmIsInRndArray = inArray(randomNumbers, userNumber);


//Genero 16 numeri casuali tra 1 e 100
var randomNumber;
var randomNumbers = [];
var resultInArrayRnd = inArray(randomNumbers, randomNumber);


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//Fino a quando il numero non è incluso nell'array e la lunghezza dell'array è minore di 16 allora...
do  {
    //...genero un numero
    randomNumber = getRndInteger(1, 100);
    //Lo inserisco nell'array
    randomNumbers.push(randomNumber);
} while ( resultInArrayRnd == true  || randomNumbers.length <= 15 );

console.log(randomNumbers);

// //Chiedo all'utente di inserire un numero compreso da 1 e 100
// var userNumber;
// var userNumbers = [];

// while ( isNaN(userNumber) || userNumber < 1 || userNumber > 100 ) {
//     userNumber = parseInt(prompt('Inserisci un numero compreso tra 1 e 100')); 
// } 
// // controllo se è nell array, se si richiedo
// if ( userNumbers.includes(userNumber) ) {
//     while ( userNumbers.includes(userNumber) ) { //Fintanto che il numero è già stato inserito richiedimelo
//         userNumber = parseInt(prompt('Hai già inserito questo numero, scegline un altro'));
//     }    
// } else if ( randomNumbers.includes(userNumber) ) { // il numero scelto dall'utente è una bomba?
//     console.log('Hai pestato sulla bomba!!!');
//     if ( userNumbers.length <= 5 ) {
//         console.log('La fortuna non ti asssite, sei riuscito a fare solamente ' + userNumbers.length + ' passi prima di beccarla!');
//     } else if ( userNumbers.length > 5 && userNumbers.length <= 15 ) {
//         console.log('Sei riuscito a trascinarti più in là della tua ombra di ' + userNumbers.length + ' passi, buono!');
//     } else if ( userNumbers.length > 15 && userNumbers.length <= 40 ) {
//         console.log('Hai fatto ' + userNumbers.length + ' passi, e sei riuscito a portarti a metà della terra di nessuno, mancava poco!');
//     } else if ( userNumbers.length > 40 && userNumbers.length <= 100 ) {
//         console.log('Ci sei quasiii!!! Con i tuoi ' + userNumbers.length + ' passi, sei riuscito a portarti quasi sul confine!');
//     }
// } else {
//     userNumbers.push(userNumber);
// }
// console.log('Ancora un altro passo!');
 