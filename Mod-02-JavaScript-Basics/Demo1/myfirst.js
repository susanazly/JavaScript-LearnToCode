"use strict";

let firstname= "Susana";
let lastname= "Zelaya";
let age = 24;
console.log(lastname + ", " + firstname);         //comment is two slashes 
console.log("My name is " + firstname + " " + lastname + " and I am " + age); 

let price = 19.95;
if (age >= 65) {
    price = price * .9; // take 10% off the price
}
console.log(price.toFixed(2));