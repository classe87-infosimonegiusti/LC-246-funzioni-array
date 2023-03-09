const studenti = ['pippo', 'pluto', 'paperino'];
const automobili = ['500', 'panda', 'audi'];

//ciclo for tradizionale
for (let i = 0; i<studenti.length; i++) {
    console.log(i + " " + studenti[i]);
}

//forEach con arrow function
studenti.forEach((elemento, indice) => {
    console.log(indice + " " + elemento);
});

//forEach con funzione anonima
studenti.forEach(function(elemento, indice) {
    console.log(indice + " " + elemento);
})

//forEach con callback
studenti.forEach(mostraArray);
automobili.forEach(mostraArray);

function mostraArray(elemento, indice, array) {
    console.log(indice + " " + elemento);
}


