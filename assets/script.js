/*START JS*/

const priceForKm = 0.21;
const discountChildren = 20;
const discountSenior = 40;

const userName = document.querySelector('.user_name');
const userDistance = document.querySelector('.user_distance');
const userAge = document.querySelector('.user_Age');
// console.log(userName, userDistance, userAge);

const basePrice = userDistance * priceForKm;
// console.log(basePrice);

let discountPercent = 0;

if (userAge < 18) {
    discountPercent = discountChildren;
} else if (age >= 65) {
	discountPercent = discountSenior;
}

// console.log(discountPercent);

const discount = basePrice * discountPercent / 100;
// console.log(discount);

let finalPrice = basePrice - discount;
finalPrice = parseFloat(finalPrice.toFixed(2));
// console.log(finalPrice);




