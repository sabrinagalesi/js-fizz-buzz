//calcola la somma e la media dei primi 10 numeri
//per prima cosa, faccio un array con 10 numeri;
// faccio un for per la somma, con una var esterna
// con la somma, divido poi il risultato per il numero di volte che ho sommato

var numeri = [
    4,
    7,
    12,
    33,
    2,
    8,
    18,
    5,
    9,
    10
]

console.log(numeri);

var somma = 0;

var media= 0;

for(counter=0; counter < numeri.length; counter++) {
    somma= somma + numeri[counter];
    media= (media+numeri[counter]);
} //così faccio la somma

media= media / numeri.length;

console.log(somma);
console.log(media);

