(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

const sandwichMaker = require('./SandwichMaker');
console.log("does this work");

let submit = document.getElementById("submit");
let output = document.getElementById("output");
let bread = document.getElementById("bread");
let meat = document.getElementById("meat");
let cheese = document.getElementById("cheese");
let veggies = document.getElementById("veggies");
let menu = document.getElementById("menu");

//Event listner for button
submit.addEventListener('click', function(){
    console.log("Submit on total", sandwichMaker.getTotal());
    output.innerHTML = `${sandwichMaker.getTotal()} ${sandwichOutput(sandwichMaker.getSandwich())}`;
});

// When you select 'none' you want to deselect the other checkboxes that are checked.
// If 'none' is selected and another option is checked 'none' needs to be deselected.
// If 'none' is selected then you need to clear out that categories total out.
// Only if something is checked should the total be added to the total.
menu.addEventListener('change', function(){
    sandwichMaker.addIngredient(event.target.closest('section').id, event.target.value);
});

let sandwichOutput = function (sandwichObject) {
    let sandwichString = "";
    for(let ingredient in sandwichObject) {
        console.log("ingredient", sandwichObject[ingredient]);
        for (let i = 0; i < sandwichObject[ingredient].length; i++) {
            sandwichString += `${sandwichObject[ingredient][i]} `;
        }
    }
    return sandwichString;
};






},{"./SandwichMaker":2}],2:[function(require,module,exports){
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



},{"./DOMinteraction":1,"./bread":3,"./cheese":4,"./condiments":5,"./meat":6,"./veggies":7}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
"use strict";

console.log("cheese");

let cheesePrices = {
    "american": 1.00,
    "Pepper Jack": 1.50,
    "swiss": 2.00
};

module.exports.addCheese = function(cheeseType) {
    return cheesePrices[cheeseType];
};

},{}],5:[function(require,module,exports){
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
},{}],6:[function(require,module,exports){
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



},{}],7:[function(require,module,exports){
"use strict";

console.log("veggies");

let veggiePrices = {
    "peppers": 0.50,
    "onions": 0.75,
    "lettuce": 0.50
};

module.exports.addVeggies = function(veggieType) {
    return veggiePrices[veggieType];
};

},{}]},{},[2]);
