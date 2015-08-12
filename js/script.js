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

// array
var value = [.01,.05,.10,.25];      // The array is of the value of each coin

// expression & outputs
var total = ((pennies * value[0]) + (nickles * value[1]) + (dimes * value[2]) + (quarters * value[3]));    //multiplying the amount of each coin by its value
console.log("You found a total amount of" + " " + "$"+total + " " + "in your car.");  //output of the total amount of spare change found in user's car.



alert("You found a total of" + " " + "$" + total + " " + "in your car.");        //alert of the total amount of spare change found in user's car.

 // test values
//** I put in 10 pennies, 30 nickles, 3 dimes and 6 quarters and the calculator gave me a total of $3.40.
//* I put in 25 pennies, 0 nickles, 70 dimes and 2 quarters and the calculator gave me a total of $7.75.
//* I put in 300 pennies, 78 nickles, 40 dimes, and 60 quarters and the calculator gave me a total of  $25.90