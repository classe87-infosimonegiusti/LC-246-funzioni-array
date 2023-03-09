/*
    A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
    Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]
*/

const nomi = ["pippo", "PLUTO", "Paperino"];



const nomiCapitalizzati = nomi.map(nome => {

    const primaLettera = nome[0].toUpperCase();

    let restoDelNome = "";

    for (let i = 1; i < nome.length; i++) {
        restoDelNome += nome[i].toLowerCase();
    }

    return primaLettera + restoDelNome;

});

console.log(nomiCapitalizzati);






const nomiCapitalizzatiVariante = nomi.map(nome => {
    return nome.substring(0,1).toUpperCase() + nome.substring(1).toLowerCase();

});

console.log(nomiCapitalizzatiVariante);
