/*Chiedere quanti chilometri vuole percorrere e metterlo nella varibile UserDistance
Chiedere l'età del passeggero e metterlo nella variabile UserAge
Stabilire il prezzo del biglietto in base ai km (0.21 € al km)

Applicare uno sconto del 20% per userAge
Applicare uno sconto del 40% per gli over 65
Prezzo totale del viaggio nella variabile () */


const userDistance = parseInt(prompt ('Quanti chilometri devi percorrere?'));
console.log('userDistance', userDistance);

const userAge = parseInt(prompt ('Quanti anni hai?'));
console.log('userAge', userAge);

const kmPrice = (0.21);
console.log('kmPrice', kmPrice);

let ticketPrice = userDistance * kmPrice;


if (userAge >= 18 && userAge <= 65) {
    ticketPrice
    document.getElementById('discountedPrice').innerHTML = ticketPrice;
    console.log(ticketPrice);
}
if (userAge > 65) {
    let discountedPrice1 = ticketPrice - (ticketPrice * 40 / 100);
    let discountedPrice1C = discountedPrice1.toFixed(2)
    document.getElementById('discountedPrice').innerHTML = discountedPrice1C;
    console.log(discountedPrice1C);
}
if (userAge < 18) {
    let discountedPrice2 = ticketPrice - (ticketPrice * 20 / 100);
    let discountedPrice2A = discountedPrice2.toFixed(2)
    document.getElementById('discountedPrice').innerHTML = discountedPrice2A;
    console.log(discountedPrice2A);
}






