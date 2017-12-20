"use strict";

require("./DOMinteraction");
let bread = require("./bread");
let veggies = require("./veggies");
let cheese = require("./cheese");
let condiments = require("./condiments");
let meat = require("./meat");
let total = 0;

let sandwich = {
    "bread" : [],
    "meat" : [],
    "cheese" : [],
    "condiments" : [],
    "veggies" : [],
};

module.exports.addIngredient = function(id, value) {
    if (id === "bread") {
        sandwich[id].push(value);
        total += bread.addBread(value);
    } if (id === "cheese") {
        sandwich[id].push(value);
        total += cheese.addCheese(value);
    } if (id === "condiments") {
        sandwich[id].push(value);
        total += condiments.addCondiments(value);
    } if (id === "meat") {
        sandwich[id].push(value);
        total += meat.addMeat(value);       
    } if (id === "veggies") {
        sandwich[id].push(value);
        total += veggies.addVeggies(value);
    }
    console.log("total", total);
    // return total;
};

//Example of the same logic above but as a switch statement.
// module.exports.addIngredient = function(id, value) {
//     sandwich[id].push(value);
//     switch(id) {
//         case "bread":
//         total += bread.addBread(value);
//         break;
//         case "cheese":
//         total += cheese.addCheese(value);
//         break;
//         case "condiments":
//         total += condiments.addCondiments(value);
//         break;
//         case "meat":
//         total += meat.addMeat(value); 
//         break;
//         case "veggies":
//         total += veggies.addVeggies(value);
//         break;
//     }
//     return total;
// };


module.exports.getTotal = function() {
    return total;
};

module.exports.getSandwich = function() {
    return sandwich;
};


