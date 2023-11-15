'use strict';

// Chiedi all'utente di inserire una parola
let parolaUtente;
do {
    parolaUtente = prompt("Inserisci una parola:");
} while (!parolaUtente || parolaUtente.length < 2 || !isParolaValida(parolaUtente));

// Funzione per verificare se una parola è composta solo da lettere
function isParolaValida(parola) {
    // Controlla se la parola contiene solo lettere
    return /^[a-zA-Z]+$/.test(parola);
}

// Funzione per invertire una parola 
function invertiParola(parola) {
    let parolaInvertita = "";
    for (let i = parola.length - 1; i >= 0; i--) {
        parolaInvertita += parola[i];
    }
    return parolaInvertita;
}

// Funzione per verificare se una parola è palindroma
function isPalindroma(parola) {
    // Confronta la parola originale con la parola invertita
    return parola.toLowerCase() === invertiParola(parola.toLowerCase());
}

// Risultato
if (isPalindroma(parolaUtente)) {
    alert("La parola è palindroma!");
} else {
    alert("La parola non è palindroma.");
}