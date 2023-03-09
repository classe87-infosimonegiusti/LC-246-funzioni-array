
const numeri = [1,2,4,7,9,10,12,22];
const numeriPari = [];

for (let i = 0; i < numeri.length; i++) {
    if (numeri[i] % 2 == 0) {
        numeriPari.push(numeri[i]);
    }
}

console.log(numeri);
console.log(numeriPari);


const numeriPariFilter = numeri.filter((elemento) => {
    if (elemento % 2 == 0) {
        return true;
    } else {
        return false;
    }
});

const numeriPariFilterADieta = numeri.filter( elemento => elemento % 2 == 0 ? true : false );

console.log(numeriPariFilter);
console.log(numeriPariFilterADieta);



/*
const automobili = [
    {
        colore: 'rosso',
        modello: '500'
    },
    {
        colore: 'nero',
        modello: 'panda'
    }
];

const automobiliRosse = automobili.filter((automobile) => {

    if (automobile.colore == "rosso") {
        return true;
    } else {
        return false;
    }

});

console.log(automobiliRosse);

*/


