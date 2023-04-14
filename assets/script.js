/*START JS*/

/*DICHIARAZIONE VARIABILI*/

const priceForKm = 0.21;
const discountChildren = 20;
const discountSenior = 40;

const userNameElement = document.querySelector('#user_name');
const userDistanceElement = document.querySelector('#user_distance');
const userAgeElement = document.querySelector('#user_age');
const btnDone = document.querySelector('#btn_done');
const btnReset = document.querySelector('#btn_reset');
const finalPrice = document.querySelector('#final_price');
// console.log(userNameElement, userDistanceElement, userAgeElement, btnDone, btnReset, finalPrice);

/*INZIO INPUT DONE*/

btnDone.addEventListener('click', function () {

    userName = parseInt(userNameElement.value);
    userDistance = parseInt(userDistanceElement.value);
    userAge = parseInt(userAgeElement.value);

    const basePrice = userDistance * priceForKm;
    // console.log(basePrice);

    let discountPercent = 0;

    if (userAge < 18) {
    discountPercent = discountChildren;
    } else if (userAge >= 65) {
	discountPercent = discountSenior;
    }
    // console.log(discountPercent);

    const discount = basePrice * discountPercent / 100;
    // console.log(discount);

    let finalPrice = basePrice - discount;
    finalPrice = parseFloat(finalPrice.toFixed(2));
    document.getElementById('final_price').innerHTML = ('' + finalPrice);
    // console.log(finalPrice);

} );

/*INZIO INPUT RESET

CON TYPE=RESET AL BUTTON LO FA DA SOLO SENZA QUESTO JS SOTTO*/

btnReset.addEventListener('click', function() {
    
    userNameElement.value = '';
    userDistanceElement.value = '';
    userAgeElement.value = '';
    finalPrice.innerHTML = '';

});

