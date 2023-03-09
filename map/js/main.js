const numeri = [1,2,3,4,5];
const quadrati = [];

for(let i = 0; i < numeri.length; i++) {
    const quadrato = numeri[i] * numeri[i];
    quadrati.push(quadrato);
}

console.log(numeri);
console.log(quadrati);


const quadratiMap = numeri.map((numero) => {
    return numero * numero;
});

console.log(quadratiMap);

const quadratiMapADieta = numeri.map(numero => numero * numero);
console.log(quadratiMapADieta);


const quadratiMapADietaFerrea = numeri.map(n => n * n); //caso estremo
console.log(quadratiMapADietaFerrea);
