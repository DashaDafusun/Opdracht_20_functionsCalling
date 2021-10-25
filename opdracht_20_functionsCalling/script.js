'use strict'


//  DEEL 1

let getAge = (age) => {
    return age >= 18
}


let getAdult = function (age) {
    let getAgeAdult = getAge(age);
    if (getAgeAdult) {
        return "Hello there";
    } else {
        return "Hey kiddo"
    }
}


console.log(getAdult(5));
console.log(getAdult(18));
console.log(getAdult(21));


// DEEL 2

let getVat = procent => {
    return procent / 100
}

let getPriceWithVat = function (price, procent) {
    let takeVat = getVat(procent);
    return (price * takeVat) + price

}

console.log(getPriceWithVat(1000, 21));
console.log(getVat(21));
console.log(getPriceWithVat(2.18, 10));
console.log(getVat(10));


// DEEL 3

let getVatInNum = procent => {
    return (procent / 100) + 1;
}

let getBasePrice = function (price, procent) {
    let vatAmount = getVatInNum(procent);
    let basePrice = price / vatAmount;
    return basePrice.toFixed(2)
}

let getVatAmount = function (price, procent) {
    let priceWithoutProcent = getBasePrice(price, procent);
    let getProcent = procent / 100;
    let result = priceWithoutProcent * getProcent
    return result.toFixed(2);
}

let getPriceInArray = function (price, procent) {
    let vatInNum = getVatInNum(procent);
    let basePrice = getBasePrice(price, procent);
    let vatAmount = getVatAmount(price, procent);
    let endResult = [];
    endResult.push(basePrice, vatAmount);
    return endResult
}


console.log(getPriceInArray(1210, 21));
console.log(getPriceInArray(2.18, 9));
console.log(getPriceInArray(150, 10));


