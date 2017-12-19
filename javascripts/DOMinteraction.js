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





