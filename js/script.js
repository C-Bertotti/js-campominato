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

//Genero 16 numeri casuali tra 1 e 100
var bomba;
var bombe = [];
var doppiaBomba = inArray(bombe, bomba);

//Fino a quando il numero non è incluso nell'array e la lunghezza dell'array è minore di 16 allora...
while ( doppiaBomba = false  || bombe.length < 16 )  {
    //...genero un numero
    bomba = getRndInteger(1, 100);
    //Lo inserisco nell'array
    bombe.push(bomba);
}

//Chiedo all'utente di inserire un numero compreso da 1 e 100
var numeriUtente = [];
var bombaEsplosa = false;

while ( numeriUtente.length < 84 && bombaEsplosa == false ) {
    var numero = parseInt(prompt('inserisci un numero'));

    if ( isNaN(numero) || numero < 1 || numero > 100 ) {
        alert('Hai inserito un numero non valido');
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


// controllo se è nell array, se si richiedo
// if ( resultInArrayUser == true ) { 
//     while ( resultInArrayUser == true ) {
//         userNumber = parseInt(prompt('Hai già inserito questo numero, scegline un altro'));
//     }
// } else if ( UserNmIsInRndArray == true ) {
//     console.log('Hai pestato sulla bomba!');
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
//     console.log(userNumbers);
// }  


// farei un ciclo while con condizione (UserNmIsInRndArray == false || userNumbers <= 84), ovvero fintanto che il numero non è presente nell'array dei random o raggiunge la max lunghezza di 84 elementi
// while ( UserNmIsInRndArray == false || userNumbers <= 84 )  {
//     while ( isNaN(userNumber) || userNumber < 1 || userNumber > 100 ) {
//         userNumber = parseInt(prompt('Inserisci un numero compreso tra 1 e 100')); 
//         while ( resultInArrayUser == true ) { 
//             userNumber = parseInt(prompt('Hai già inserito questo numero, scegline un altro'));
//         }
//     } 
//     userNumbers.push(userNumber);
// } 

// if ( UserNmIsInRndArray == true ) {
    
//     console.log('Hai pestato sulla bomba!');
//     if ( userNumbers.length <= 5 ) {
//         console.log('La fortuna non ti asssite, sei riuscito a fare solamente ' + userNumbers.length + ' passi prima di beccarla!');
//     } else if ( userNumbers.length > 5 && userNumbers.length <= 15 ) {
//         console.log('Sei riuscito a trascinarti più in là della tua ombra di ' + userNumbers.length + ' passi, buono!');
//     } else if ( userNumbers.length > 15 && userNumbers.length <= 40 ) {
//         console.log('Hai fatto ' + userNumbers.length + ' passi, e sei riuscito a portarti a metà della terra di nessuno, mancava poco!');
//     } else if ( userNumbers.length > 40 && userNumbers.length <= 100 ) {
//         console.log('Ci sei quasiii!!! Con i tuoi ' + userNumbers.length + ' passi, sei riuscito a portarti quasi sul confine!');
//     }
// }