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
    sandwich[id].push(value);
    console.log(sandwich);
    total += bread.addBread(value);
    console.log("total", total);
};

module.exports.getTotal = function() {
    return total;
};

module.exports.getSandwich = function() {
    return sandwich;
};


