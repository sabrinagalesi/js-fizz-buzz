/* Scrivi un programma che stampi i numeri da 1 a 100, 
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. 
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz. */

//Per prima cosa, faccio un ciclo che listi i numeri da 1 a 100

for(numero = 1; numero <= 100; numero++) { // Qui listo i numeri
    // Se il numero è un multipo di 3 stampo Fizz al posto del numero(per capire se un numero è un multiplo di 3 devo controllare che quando lo divido
    // per 3 non mi da resto)
    if(numero % 3==0 && numero % 5 ==0) { // Faccio lo stesso per multipli di 3 e 5 insieme
        console.log ("FizzBuzz");
    }  else if (numero % 5 ==0) { //Faccio lo stesso per i multipli di 5 
        console.log("Buzz"); 
    } else if (numero % 3 ==0) { 
        console.log("Fizz");
    } else {
        console.log(numero);
    }
}