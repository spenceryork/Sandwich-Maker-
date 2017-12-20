"use strict";

console.log("cheese");

let cheesePrices = {
    "american": 1.00,
    "pepper jack": 1.50,
    "swiss": 2.00
};

module.exports.addCheese = function(cheeseType) {
    return cheesePrices[cheeseType];
};
