const numeroDaTestare = 7;

let risultato;

if (numeroDaTestare % 2 == 0) {
    risultato = "pari";
} else {
    risultato = "dispari";
}

console.log(risultato);

risultato = ( numeroDaTestare % 2 == 0 ) ? "pari" : "dispari";

console.log(risultato);

//operatore ternario,
// testo una condizione (e faccio seguire un ? )
// se la condizione è vera, ritorno il primo valore dopo il ?
// se la conndizione è false, ritorno il valore dopo i :