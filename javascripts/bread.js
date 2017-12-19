"use strict";

let breadPrices = {
    "white": 0.99,
    "wheat": 1.25,
    "rye": 1.50,
    "none" : 0
};

module.exports.addBread = function(breadType) {
    return breadPrices[breadType];
};