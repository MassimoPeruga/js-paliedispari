## Parole palindrome

Questo programma chiede all'utente di inserire una parola, verifica se la parola è composta solo da lettere, la inverte e determina se è palindroma o meno. Infine, mostra un messaggio all'utente in base al risultato della verifica.

1. Chiede all'utente di inserire una parola tramite prompt:
   1. Utilizza un ciclo do-while per verificare che l'utente fornisca un'input valido.
   2. Continua a richiedere l'inserimento finché l'utente non inserisce una parola valida (contenente solo lettere).
   3. All'interno del ciclo viene richiamata una funzione che verifica che la stringa ricevuta sia composta da sole lettere.

2. Verifica se la parola è palindroma:
   - Tramite una funzione inverte la parola inserita dall'utente.
   - Tramite ua funzione confronta la parola originale con quella invertita.

3. Mostra un messaggio all'utente tramite una condizione if che fornisce un messaggio opportuno.



## Pari o Dispari

Questo programma replica il gioco pari o dispari generando un numero casuale da 1 a 5 per il computer e implementando l'uso di diverse funzioni:

1. Chiede all'utente di scegliere tra "pari" e "dispari", se l'utente inserisce un valore diverso, continua a richiedere l'input fino a quando non ottiene una risposta valida.

2. Chiede all'utente di inserire un numero compreso tra 1 e 5, se l'utente non inserisce un numero o il numero è fuori dal range continua a richiedere l'input fino a quando non ottiene una risposta valida.

3. Utilizza una funzione per generare casualmente un numero compreso tra 1 e 5, inclusi gli estremi.

4. Utilizza una funzione per calcolare la somma del numero scelto dall'utente e del numero generato casualmente per il computer.

5. Utilizza una funzione per verificare se la somma dei due numeri è pari o dispari.

6. Confronta la scelta dell'utente con il risultato pari o dispari della somma:
   - Se la scelta dell'utente coincide con la natura pari o dispari della somma, l'utente vince;
   - Altrimenti, il computer vince.

7. Stampa in console: 
   - la scelta dell'utente, 
   - il numero inserito, 
   - il numero generato per il computer, 
   - la somma dei numeri 
   - se la somma è pari o dispari,
   - chi ha vinto.
