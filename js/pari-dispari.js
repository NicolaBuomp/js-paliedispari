var richiestaUno = document.getElementById('richiesta-uno');
var richiestaDue = document.getElementById('richiesta-due');
var numeroRandom = document.getElementById('num-random');
var sommaNumeri = document.getElementById('somma-numeri');
var risPariDispari = document.getElementById('ris-paridispari');
var vincitore = document.getElementById('vincitore');



var richiestaUtente = prompt('Scegli True se vuoi pari o False se vuoi dispari');
richiestaUtente = richiestaUtente.charAt(0).toUpperCase(0) + richiestaUtente.slice(1);
console.log("La scelta dell'utente: " + richiestaUtente);
richiestaUno.innerHTML = richiestaUtente;



var richiestaNumUtente = parseInt(prompt('Scegli un numero da 1 a 5'));
console.log("Il numero scelto dall'utente: " + richiestaNumUtente);
richiestaDue.innerHTML = richiestaNumUtente;



var number = getRandomNumber(1, 5);
console.log("Il numero random generato è: " + number);
numeroRandom.innerHTML = number;



var somma = number + richiestaNumUtente;
console.log("La somma dei due numeri è: " + somma);
sommaNumeri.innerHTML = somma;

var pariDispari = isPari(somma);

if (pariDispari == true) {
    risPariDispari.innerHTML = 'Pari';

} else {
    risPariDispari.innerHTML = 'Dispari';

}
if (richiestaUtente == 'Pari') {
    richiestaUtente = true;
} else {
    richiestaUtente = false;
}

if (richiestaUtente == pariDispari) {
    vincitore.innerHTML = 'Hai vinto';

} else {
    vincitore.innerHTML = 'Vince il computer';

}

// FUNCTION NUMERO RANDOM
function getRandomNumber(min, max) {
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random;
}

// FUNCTION PARI DISPARI
function isPari(numero) {
    if (numero % 2 === 0) {
        return true;
    }
    return false;
}