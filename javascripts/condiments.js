"use strict";

console.log("condiments");

let condimentPrices = {
    "ketchup": 0.75,
    "mustard": 0.75,
    "mayo": 0.75,
    "none": 0
};

module.exports.addCondiments = function(condimentType) {
    return condimentPrices[condimentType];
};