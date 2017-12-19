"use strict";

require("./DOMinteraction");
let bread = require("./bread");
let veggies = require("./veggies");
let cheese = require("./cheese");
let condiments = require("./condiments");
let meat = require("./meat");
let total = 0;


module.exports.addIngredient = function(id, value) {
    console.log(bread.addBread(value), "module is connected");
    total += bread.addBread(value);
    console.log("total", total);
};
