"use strict";

const sandwichMaker = require('./SandwichMaker');
const breadPrice = require("./bread");
console.log("does this work");

let submit = document.getElementById("submit");
let output = document.getElementById("output");
let bread = document.getElementById("bread");
let meat = document.getElementById("meat");
let cheese = document.getElementById("cheese");
let veggies = document.getElementById("veggies");
let menu = document.getElementById("menu");
let total = 0;

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
    if (event.target.checked === true) {
        sandwichMaker.addIngredient(event.target.closest('section').id, event.target.value);
    } 
    // else {
    //    let total = sandwichMaker.addIngredient();
    //    total - breadPrice.addBread(event.target.value);
    //    return total;
    
    console.log("event.target.value", event.target);
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





