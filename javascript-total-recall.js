//Q & A

// 1. How do we assign a value to a variable? 
//With the assignment operator.
//let z = 3;
//console.log(z)
// 2. How do we change the value of a. 
//By changing LET.

//3. How do we assign an existing variable to a new variable?
// the first and easiest way of changing a value of a variable is simply to reassign it:
//example, let numberOfCats = 3; numberOfCats = 4;

//4. Remind me, what are declare, assign, and define?
// Declare- using, VAR (only in older), Let, const.
// Assign- using the assignment operator.
// Define- a variable is to give the variable a value.

// 5. What is pseudocoding and why should you do it? 
//A Pseudocode is defined as a step-by-step description of an algorithm. Pseudocode does not use any programming language in its representation instead it uses the simple English language text as it is intended for human understanding rather than machine reading.
//Pseudocode is the intermediate state between an idea and its implementation(code) in a high-level language.

// 6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
// you should spend over half the time planning (over 60%), the time should be spent in solving the actual coding should take less time.

//=====================Strings==================================

// 1. Create a variable called firstVariable?
// let firstVariable;

// 2. Assign it the value of the string "Hello World"?
// let firstVariable = "Hello World";

// 3. Change the value of this variable to some number?
// let firstVariable = 3;

// 4. Store the value of firstVariable in a new variable called secondVariable?
// let secondVariable = 3;

// 5. Change the value of secondVariable to any string?
// secondVariable = "Go Buckeyes";
//console.log(secondVariable);
// 6. What is the value of firstVariable? 
// console.log(firstvariable);

// 7. Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
// ex: Hello, my name is Jean Valjean

// 8. let yourName = "Phyllis"
// let greeting = "Hello, my name is " + yourName;
//console.log(greeting);
// =====================BOOLEAN==================================

// Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console?
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

//console.log(a != b);
//console.log(c != d);
//console.log('Name' == 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
//console.log(true || false);
//console.log(false && false && false && false && false || true);
//console.log(false == false)
//console.log(e == 'Kevin');
//console.log(a < b != c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
//console.log(a == a != d); // note: the answer is a simple arithmetic equation, not something "weird"
//console.log(48 == '48');
//================================THE FARM==========================================================================
//Declare a variable animal. Set it to be either "cow" or something else
//let animal = "cow";

//Write code that will print out "mooooo" if the it is equal to cow
//let animal = "cow";

//if (animal === "cat") {
// console.log("moooo");
//} else {
//  console.log("Hey! You're not a cow.");
//}


//===================================DRIVERS ED=================================================================
//Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
//let personage = 7;

//if (personage >= 16){
// console.localStorage("Here are the keys!");
//} else {
// console.localStorage("Sorry, you're too young.");
//}
//=======================================THE BASICS=========================================================
//Write a loop that will print out all the numbers from 0 to 10, inclusive

//for (let i = 0; i < 11; i++) {
// console.log(i)
//}

//Write a loop that will print out all the numbers from 10 up to and including 400

//for (i = 10; i < 401; i++) {
// console.log(i)
//}

//Write a loop that will print out every third number starting with 12 and going no higher than 4000
//for (let i=12; i<=4000; i+=3) {
//    console.log(i);
//}

//===============================GET EVEN===============================================================

//Print out the numbers that are within the range of 1 - 100
//for (i=1; i<=100; i++) {
//    console.log(i, "is even");
//}

//===================================Give me Five============================================

//For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five

//const str = "I found a number. High five!";
//console.log(str)

//const str = "I found a number. Three is a crowd";
//console.log(str)

//=============================SAVINGS ACCOUT======================================================
//Write code that will save the sum of all the numbers between 1 - 10 to a variable called  bank_account.
let bank_account = 0;
for (i = 1; i <= 10; i += 2); {
    sum += i;
//console.log(sum)
}

//You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.

let bonus = 0;
for (i = 1; i <= 100; i / 2);{
    sum += i;
} //console.log(sum)