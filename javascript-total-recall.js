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
//const a = 4;
//const b = 53;
//const c = 57;
//const d = 16;
//const e = 'Kevin';

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
//let bank_account = 0;
//for (i = 1; i <= 10; i += 2); {
//   sum += i;
//console.log(sum)
//}

//You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.

//let bonus = 0;
//for (i = 1; i <= 100; i / 2);{
//   sum += i;
//} //console.log(sum)

//===============================ARRAYS AND CONTROL FLOW======================================================
//==========================================TALK ABOUT IT============================================
//1. What are the things in an array called?
//CONST, variable, value and strings.

//2. Do Arrays guarantee those things will be in order?
// yes

//3.What real-life thing could you model with an array?
//items in a shopping cart.

//----------------------------Easy Does It------------------------------------------------------
//1. Create an array that contains three quotes and store it in a variable called quotes
//const quotes =  ["easy does it", "smile", "be nice"];

//=============================Accessing Elements==========================================================
//const randomThings = [1, 10, "Hello", true];

//1. How do you access the 1st element in the array?
//let randomthings = randomThings[0];
//console.log(randomThings);

//2. Change the value of "Hello" to "World"
//const greeting = ["Hello"];
//greeting[0] = "World";
//console.log(greeting);
//3. Check the value of the array to make sure it updated the array. How? Why, yes! console.log();

//================================changing Values==================================================================

//const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

//1. What would you write to access the 3rd element of the array? //console.log(ourClass[2]);

//2. Change the value of "Github" to "Octocat"
//Add a new element, "Cloud City" to the array
//ourClass[4] = "Octocat";
//console.log(ourClass);
//ourClass.push("Cloud City");
//console.log("ourClass")

//--------------------------------------------MIX IT UP-------------------------------------------------------
//const myArray = [5, 10, 500, 20]
//myArray.push("a")

//====================================biggie small=======================================================
//if ((num >= 100) && (num <= 100)); {        // logical condition
//num = "littlenumber.";               // executed if condition is true
//} else {                                // else block is option
//num = "littlenumber";
//}     
//console.log("littlenumber");

//if ((num >= 100) && (num <= 100)); {        // logical condition
//  num = "bignumber.";               // executed if condition is true
// } else {                                // else block is option
//num = "bignumber";
// }     
//console.log("bignumber");
//=======================================monkey in the middle=============================================
if (littlenum -= 5); {
    littlenum -= 5;
}
//console.log() little number if the number entered is less than 5.



//===================================whats in your closet===================================================
//const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//  "Per Scholas hoodie",
//  "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
//];

// Thom's closet is more complicated. Check out this nested data structure!!
//const thomsCloset = [
[
    // These are Thom's shirts
    //"grey button-up",
    //"dark grey button-up",
    //"light blue button-up",
    //"blue button-up",
    //], [
    // These are Thom's pants
    //      "grey jeans",
    //       "jeans",
    //        "PJs"
    //    ], [
    // Thom's accessories
    //       "wool mittens",
    //       "wool scarf",
    //        "raybans"
]
//];

//console.log("Kristyn is rocking that" + kristynsCloset[3] + "today!");
//kristynsCloset.splice(5, 0, "raybans");
//console.log(kristynsCloset)
//kristynsCloset[5] = "stained knit hat";
//console.log(kristynsCloset)
//thomsCloset[0][0];
//thomsCloset[1][1];
//thomsCloset[2][1];
//console.log("Thom is looking fierce in a grey button-up,jeans and wool scarf");
//thomsCloset[1][2] = "Footie Pajamas";
//console.log(thomsCloset)


//-------------------------------------------------FUNCTIONS------------------------------------------------

//const printCool = (argument) => {
//    return argument + "is cool";
//};
//console.log(printCool("Captain Reynolds"));

//const calculateCube = (singleNumber) => {
//   return singleNumber + singleNumber + singleNumber;
//};
//console.log(calculateCube(5));

//onst isAvowel = (character) => {
//if (character === "a" || character === "e" || character === "o" || character == "u" || character === "u") {
//     return true;
//  } else {
//       return false;
//  }
//};
//console.log(isAvowel("e"));

//function lengths(array) {
//   return array.map(str => str.length);
//}
//console.log(lengths(['Hank', 'Hippopalous']));

//=====================================OBJECTS==============================================================
//const user =
//{
//  name: "Phyllis",
//  email: "phyllisstewart@gmail.com",
//  age: 44,
//  purchased: [],
//};
//user.email = "peacock@yahoo.com";
//user.age++;
//user['location'] = "anywhere";
//user.purchased.push("carbs");
//user.purchased.push("peace of mind")
//user.purchased.push("Merino jodhpur")

//console.log(user);
//console.log("Merino jodhpur");
//user.friend = {
//  name: "Grace Hopper",
//  age: 85,
//  location: "USA",
// purchased: []
//}
//console.log(user)

//user.friend = {
//  name: "Grace Hopper",
//   age: 85,
//  location: "USA",
//   purchased: []
//}
//console.log(user)

///////////Remember that you can add an object to an existing object in the///////////////////////
///////////same way that you can add any new property/value pair.------------------------------------

//console.log(user.friend)
//console.log(user.friend.name)
//console.log(user.friend.location)
//user.friend.age = 55

//console.log(user.friend)
//user.friend.purchased.push("The One Ring")
//user.friend.purchased.push("A latte")
//console.log(user.friend)
//console.log(user.friend.purchased[1])
//===============================================LOOPS=======================================================
//for (let i = [3]; i < user.purchased; i++) {
//  console.log(user.purchased);
//}
//for (let i = [3]; i < user.friend.purchased; i++) {
//   console.log(user.friend.purchased);
//}
//======================GET MULTIPLE lENGTHS====================================================

//const getMultipleLengths = (strArr) => {
//  const getMultipleLengthArray = [];
//    for (f = 0; f < strArr.length; f++) {
//       getMultipleLengthArray.push(strArr[f].length);
//   };
//   return getMultipleLengthArray;
//}
//console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

//const maxofThree = (n1, n2, n3) => {
//   const threeNumArray = [n1, n2, n3];
//   threeNumArray.sort(function (a, b) { return a - b });
//   return threeNumArray[2];
//}
//console.log(maxofThree(6, 9, 1))

//function longest(str) {

//   return str.sort((a, b) => b.length - a.length)[0]
//}

//console.log(longest(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

//=====================LOOPS=========================================================================
//userUpdate = user
//user.age = user.age + 1

//console.log(user)
//console.log(user.name.toUpperCase())

//user.friend = {
//  name: "Grace Hopper",
//   age: 85,
//   location: "USA",
//   purchased: []
//}
//console.log(user)

///////////Remember that you can add an object to an existing object in the///////////////////////
///////////same way that you can add any new property/value pair.------------------------------------

//console.log(user.friend)
//console.log(user.friend.name)
//console.log(user.friend.location)
//user.friend.age = 55

//console.log(user.friend)
//user.friend.purchased.push("The One Ring")
//user.friend.purchased.push("A latte")
//console.log(user.friend)
//console.log(user.friend.purchased[1])

//for (let i = [3]; i < user.purchased; i++) {
//   console.log(user.purchased);
//}
//for (let i = [3]; i < user.friend.purchased; i++) {
//    console.log(user.friend.purchased);
//}

//userUpdate = user
//user.age = user.age + 1

//console.log(user)
//console.log(user.name.toUpperCase())
//console.log(user, name.upperCase)
