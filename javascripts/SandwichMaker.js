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

//figure out how to make multiple calls depending on the id
module.exports.addIngredient = function(id, value) {
    if (id === "bread") {
        sandwich[id].push(value);
        console.log("event.target.closest('section').id", event.target.closest('section').id);
        total += bread.addBread(value);
    } if (id === "cheese") {
        sandwich[id].push(value);
        console.log("event.target.closest('section').id", event.target.closest('section').id);
        total += cheese.addCheese(value);
    } if (id === "condiments") {
        sandwich[id].push(value);
        console.log("event.target.closest('section').id", event.target.closest('section').id);
        total += condiments.addCondiments(value);
    } if (id === "meat") {
        sandwich[id].push(value);
        console.log("event.target.closest('section').id", event.target.closest('section').id);
        total += meat.addMeat(value);       
    } if (id === "veggies") {
        sandwich[id].push(value);
        console.log("event.target.closest('section').id", event.target.closest('section').id);
        total += veggies.addVeggies(value);
    }
    console.log("total", total);
    return total;
};

module.exports.getTotal = function() {
    return total;
};

module.exports.getSandwich = function() {
    return sandwich;
};


