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
    console.log("button clicked");
});

menu.addEventListener('change', function(){
    sandwichMaker.addIngredient(event.target.closest('section').id, event.target.value);
});





