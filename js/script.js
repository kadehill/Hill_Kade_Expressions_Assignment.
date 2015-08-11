/**
 *Kade Hill
 * SDI 1508
 */

// variables
var pennies;
var nickles;
var dimes;
var quarters;


// prompts
pennies = prompt("We are calculating how much spare change you have in your car. \n Enter the amount of pennies you've found.");
nickles = prompt("Enter the amount of nickles you've found");
dimes = prompt("Enter the amount of dimes you've found.");
quarters = prompt("Enter the amount of quarters you've found.");

// Arrays
var value = [.01,.05,.10,.25];

// Expressions
var total = ((pennies * value[0]) + (nickles * value[1]) + (dimes * value[2]) + (quarters * value[3]));
console.log(total);

// outputs

