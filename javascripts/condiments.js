"use strict";

console.log("condiments");

let condimentPrices = {
    "ketchup": 0.75,
    "mustard": 0.75,
    "Mayo": 0.75
};

module.exports.addCondiments = function(condimentType) {
    return condimentPrices[condimentType];
};