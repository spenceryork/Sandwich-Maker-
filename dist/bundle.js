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

let cheesePrices = {
    "american": 1.00,
    "Pepper Jack": 1.50,
    "swiss": 2.00
};

const addCheese = function(breadSelection) {

};
},{}],5:[function(require,module,exports){
"use strict";

let condimentPrices = {
    "ketchup": 0.75,
    "mustard": 0.75,
    "Mayo": 0.75
};

const addCondiments = function(breadSelection) {

};
},{}],6:[function(require,module,exports){
"use strict";

// Private variable to store the different meat prices. How is it private?
let meatPrices = { 
    salami: 0.75,
    "roast beef": 1.25,
    "turkey": 2.00
}; //why is one key in quotes but the other isn't?

const addMeat = function(meatSelection) {
  //code that grabs the correct meat price and returns it
};

module.exports = { addMeat }; //What exactly is being exported here?
},{}],7:[function(require,module,exports){
"use strict";

let veggiePrices = {
    "peppers": 0.50,
    "onions": 0.75,
    "lettuce": 0.50
};

const addVeggies = function(breadSelection) {

};
},{}]},{},[2]);
