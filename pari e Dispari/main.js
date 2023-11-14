'use strict';

// L'utente sceglie tra pari o dispari
function chiediPariDispari() {
    let scelta = prompt("Scegli pari o dispari:").toLowerCase();
    while (scelta !== "pari" && scelta !== "dispari") {
        scelta = prompt("Scelta non valida. Scegli pari o dispari:").toLowerCase();
    }
    return scelta;
}

const sceltaUtente = chiediPariDispari();

// L'utente inserisce un numero da 1 a 5
function chiediNumero() {
    let numero = parseInt(prompt("Inserisci un numero da 1 a 5:"));
    while (isNaN(numero) || numero < 1 || numero > 5) {
        numero = parseInt(prompt("Valore non valido. Inserisci un numero da 1 a 5:"));
    }
    return numero;
}

const numeroUtente = chiediNumero();

// Funzione per generare un numero random da 1 a 5
function generaNumeroRandom(min, max, includiEstremi) {
    if (includiEstremi) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
        return Math.floor(Math.random() * (max - min)) + min;
    }
}

const numeroComputer = generaNumeroRandom(1, 5, true); // Valore minimo, valore massimo, estremi compresi

// Funzione per calcolare la somma di due numeri
function sommaNumeri(num1, num2) {
    return num1 + num2;
}

const somma = sommaNumeri(numeroUtente, numeroComputer);

// Funzione per determinare se la somma è pari o dispari
function isPari(numero) {
    return numero % 2 === 0;
}

const risultatoPariDispari = isPari(somma) ? "pari" : "dispari";

//Stampa dei risultati
console.log(`Hai scelto: ${sceltaUtente}`);
console.log(`Hai inserito il numero: ${numeroUtente}`);
console.log(`Numero del computer: ${numeroComputer}`);
console.log(`Somma: ${somma}`);
console.log(`La somma è ${risultatoPariDispari}`);
if (sceltaUtente === risultatoPariDispari) {
    console.log("Hai vinto!");
} else {
    console.log("Il computer ha vinto.");
}
