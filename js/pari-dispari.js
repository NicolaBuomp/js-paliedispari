var richiestaUno = document.getElementById('richiesta-uno');
var richiestaDue = document.getElementById('richiesta-due');
var numeroRandom = document.getElementById('num-random');
var sommaNumeri = document.getElementById('somma-numeri');
var risPariDispari = document.getElementById('ris-paridispari');
var vincitore = document.getElementById('vincitore');



var richiestaUtente = prompt('Scegli tra Pari e Dispari');
richiestaUtente = richiestaUtente.charAt(0).toLowerCase() + richiestaUtente.slice(1);
console.log("La scelta dell'utente: " + richiestaUtente);
richiestaUno.innerHTML = richiestaUtente;



var richiestaNumUtente = parseInt(prompt('Scegli un numero da 1 a 5'));
console.log("Il numero scelto dall'utente: " + richiestaNumUtente);
var backup = richiestaNumUtente;
richiestaDue.innerHTML = richiestaNumUtente;



var number = getRandomNumber(1, 6);
console.log("Il numero random generato è: " + number);
numeroRandom.innerHTML = number;



var somma = number + richiestaNumUtente;
console.log("La somma dei due numeri è: " + somma);
sommaNumeri.innerHTML = somma;


// if (isPari(somma)) {
//     console.log('La somma dei due numeri è PARI');
//     if (isPari(backup)) {
//         console.log('Hai vinto!')
//     } else {
//         console.log('Hai perso!')
//     }
// } else {
//     console.log('La somma dei due numeri è DISPARI');
//     if (!isPari(backup)) {
//         console.log('Hai vinto!')
//     } else {
//         console.log('Hai perso!')
//     }
// }

if (isPari(somma) == 'Pari') {
    console.log('Pari');
    risPariDispari.innerHTML = 'Pari';
} else {
    console.log('Dispari');
    risPariDispari.innerHTML = 'Dispari';
}

if (richiestaUtente == isPari(somma)) {
    console.log('Hai vinto');
    vincitore.innerHTML = 'Hai vinto!';

} else {
    console.log('Hai perso');
    vincitore.innerHTML = 'Hai perso!';

}


// FUNCTION NUMERO RANDOM
function getRandomNumber(min, max) {
    var random = Math.floor(Math.random() * (max - min)) + min;
    return random;
}

// FUNCTION PARI DISPARI
function isPari(numero) {
    if (numero % 2 === 0) {
        return true;
    }
    return false;
}