"use strict";

console.log("meat");

// Private variable to store the different meat prices. How is it private?
let meatPrices = { 
    "turkey": 0.75,
    "ham": 1.25,
    "bacon": 2.00,
    "none" : 0
}; //why is one key in quotes but the other isn't?

module.exports.addMeat = function(meatType) {
    return meatPrices[meatType];
};


