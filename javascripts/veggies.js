"use strict";

console.log("veggies");

let veggiePrices = {
    "peppers": 0.50,
    "onions": 0.75,
    "lettuce": 0.50,
    "none" : 0
};

module.exports.addVeggies = function(veggieType) {
    return veggiePrices[veggieType];
};
