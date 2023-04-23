/*
  Copyright (c) 2023 Promineo Tech
  Author:  Promineo Tech Academic Team
  Subject:  Variables and Operations Lab
  FE 01 Lab  
*/

/** Key Terms:
 *  JavaScript
 *  GUI (Graphic User Interface)
 *  CLI (Command Line Interface)
 *  Variable
 *  Data Types:
 *   - String
 *   - Number
 *   - Boolean
 *   - Array
 *   - Undefined
 *   - Object
 *   - BigInt
 *   - Null
 *   - Symbol
 *  Method
 *  Git
 *  Source Control
 *  Operators
 *  console.log()
 * 
*/

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so. 
// Read the comments and add your code where it is specified for each question. 
/* ----------------------------------------------------- */

/*-------------------------------------------------------*/

console.log(`--------------------------
Question 1. Creating & 'console.log()'ing variables \n`);

/**
 * Instruction: Create a variable for each step, then print that variable 
 *              to the console in the correct section.
 *
 * Step 1: Create a variable to hold the quantity of available seats left on a flight.
 * Step 2: Create a variable to hold the cost of groceries at checkout
 * Step 3: Create a variable to hold a person's middle initial
 * Step 4: Is it Hot Outside?
 *         Create a variable to hold a boolean, true if it's hot outside, false if it's not hot outside.
 * Step 5: Create a variable to hold a customer's first name.
 * Step 6: Create a variable to hold a street address.
 * ↓ YOUR CODE HERE ↓ */

console.log("Step 1:  Number of Seats on a Plane");
let remainingSeats = 5;
console.log("There are " + remainingSeats + " remaining seats on the plane.");

console.log("Step 2:  Cost of Groceries");
let groceriesCost = 27.32;
console.log("The total for today's groceries is: $" + groceriesCost +".");

console.log("Step 3:  Middle Initial");
let middleInitial = "F";
console.log("This person's middle name begins with the letter '" + middleInitial + "'.");

console.log("Step 4:  Is it Hot Outside?");
let hotOutside = false;
console.log("Is it hot outside today? " + hotOutside + ".");

console.log("Step 5:  First Name");
let firstName = "Sheldon";
console.log("The customer's first name is: " + firstName + ".");

console.log("Step 6:  Street Address");
let streetAddress = "123 Somebody's Lost Lane";
console.log("Here's an address quite unfortunate to encounter: " + streetAddress + ".");

/*-------------------------------------------------------*/

console.log(`--------------------------
Question 2. Creating & 'console.log()'ing variables \n`);
 

/** 
 * Instruction: Use the variables we just created to solve the problems below.
 *              Print your answers to the console.
 * 
 *
 * */

    console.log('Remove Plane Seats:')
//	A customer booked 2 plane seats. Remove 2 seats from the available seats variable
//  ↓ YOUR CODE HERE ↓
remainingSeats -= 2;
console.log("Two of the plane's remaining seats have been reserved, adjusting the total remaining seats to: " + remainingSeats + ".");

    console.log('Buy a Candy Bar:')
//	Impulse candy bar purchase! Add 2.15 to the grocery total
//  ↓ YOUR CODE HERE ↓
groceriesCost += 2.15;
console.log("Purchasing a candy bar brings the groceries cost to: $" + groceriesCost + ".");

    console.log('Fix a Birth Certificate:')
//	A birth certificate was printed incorrectly, change the middle initial to something else
//  ↓ YOUR CODE HERE ↓
middleInitial = "E";
console.log("Someone isn't doing their job and an incorrect middle initial has been recorded. The person's middle initial is to be '" + middleInitial + "' henceforth.");

    console.log('Changing Seasons:')
//	The season has changed, update the hot outside variable	to be opposite of what it was
//  ↓ YOUR CODE HERE ↓
    hotOutside = true;
    console.log("Time warped again and three months have been suddenly skipped. Don't ask why or how this happened, but is it hot outside now? " + hotOutside);

    console.log('Full Name:')
//	Create a new variable called full name using the customer's
//  first name, the middle initial, and a last name of your choice
//  ↓ YOUR CODE HERE ↓
let lastName = "Dinkleberg"
let fullName = (firstName + " " + middleInitial + ". " + lastName)
console.log(fullName)

    console.log('Introduce a Customer:')
//	Print a line to the console that introduces the customer 
//	including the name, and saying that they live at the address variable
//  ↓ YOUR CODE HERE ↓
console.log("Here we have the infamous customer, " + fullName + ". Also known commonly as 'DINKLEBEEEEEERG'. He, unfortunately, lives at " + streetAddress + ".")


    console.log('-----------Finished------------')