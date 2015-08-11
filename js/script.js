/**
 *Kade Hill
 *08/11/15
 *SDI 1508 - Expressions Assignment
 */

// variables
var pennies;    //declaring the variable
var nickles;    //declaring the variable
var dimes;      //declaring the variable
var quarters;   //declaring the variable


// prompts
pennies = prompt("We are calculating how much spare change you have in your car. \n Enter the amount of pennies that you've found.");   //defining
nickles = prompt("Enter the amount of nickles that you've found");       // defining
dimes = prompt("Enter the amount of dimes that you've found.");          // defining
quarters = prompt("Enter the amount of quarters that you've found.");    // defining

// Array
var value = [.01,.05,.10,.25];      // The array is of the value of each coin

// Expression
var total = ((pennies * value[0]) + (nickles * value[1]) + (dimes * value[2]) + (quarters * value[3]));


// outputs
alert("You found a total of" + " " + "$" + total + " " + "in your car.");
