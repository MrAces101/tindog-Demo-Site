// Prompts user to enter name then returns welcome message

var message = "Hello ";
var name = prompt(" Enter your name");
alert(message + name + " ,welcome to the Day One Club!")


// Prompts user to enter message then returns characters typed vs remaining.

var tCount = 140;
var count = prompt("Type your tweet below");
alert("You have typed " + count.length + " characters" + " ,you have " + (tCount - count.length) + " characters remaining!")

Slice typed characters at 140
alert(prompt("Type your tweet below").slice(0, 140));

//--------------------------------------------------------------------------

// Purpose: A function that prompts the user to enter their name then ensures the first letter is captilaized

// 1. Var sotres user name taken from prompt
var name = prompt("What is your name?")

// 2. Var stores the first letter excluding the rest
var fLetter = name.slice(0, 1);

// 3. Var that stores other leters excluding the first
var oLetters = name.slice(1, name.length);

// 4. Var that capitalizes the first letter using toUpperCase
var fLetter = fLetter.toUpperCase();

// 5. Var that ensures the other letters anre lowercase
var oLetters = oLetters.toLowerCase();

// 6. Var that joins the first letter and other letters to return the name
var name = fLetter + oLetters;

// 7. An alert that concatenates the first and other letters and returns a welcome message
alert("Welcome to Day One " + name + "!");

//--------------------------------------------------------------------------

// A converter that converts dog age to human age

// 1. Cerate prompt that asks for dogs age
var dogAge = prompt("How old is your dog?");

// 2. Create a var that removes 2 from the dogs age
var humanAge = ((dogAge - 2) * 4) + 21;

// 3. Return your dogs age in human years
alert("Your dogs age in human years is " + humanAge + " years");

//--------------------------------------------------------------------------

getMilk();

function getMilk(cost) {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  var cost = prompt("How much cash do i have?")
  var amtMilk = Math.floor(cost / 1.5);
  alert("Ok, with $" + cost + " dollors I will get " + amtMilk + " bottles of milk")
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}

//--------------------------------------------------------------------------

// Function that takes in user age and calcultes the years remaing

function lifeInWeeks(age) {

  /************Don't change the code above************/

  //Prompts user to enter age.

  var age = (prompt("Whats your age"));

  var remainingYears = 90 - age;
  var days = remainingYears * 365;
  var weeks = remainingYears * 52;
  var months = remainingYears * 12;
  alert("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");

  /*************Don't change the code below**********/
}

lifeInWeeks();

//--------------------------------------------------------------------------

getMilk();

function getMilk(money) {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  var money = prompt("How much cash do i have?")
  var amtMilk = Math.floor(money / 1.5);
  alert("Ok, with $" + money + " dollors I will get " + amtMilk + " bottles of milk and get back $" + (money % 1.5))
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}

//--------------------------------------------------------------------------

//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

// function bmiCalculator(weight, height) {
//     var bmi = weight / (height * height);
//     return bmi
// }

function bmiCalculator(weight, height) {
  var bmi = weight / Math.pow(height, 2);
  return Math.round(bmi)
}

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8);

bmi should equal 20 when it's rounded to the nearest whole number.

*/

bmiCalculator(117, 2.2);

//--------------------------------------------------------------------------

//Generating random numbers

var n = Math.random();

// Multiply numbers 0 - 6
n = n * 6;

// Multiply random numbers from 1 -  6
n = Math.floor(n) + 1;

//  Return the values to the console
console.log(n);

//--------------------------------------------------------------------------

// Create a Soulmate calculator

// Prompts user to enter the name of the first person
var name1 = prompt("Enter the first name");

// Prompts user to enter the name of the second perso
var name2 = prompt("Enter the second name");

// sets var n to retern a random number
var n = Math.random();

// Multiplies a numbers 0 - 100
n = n * 100;

// Adjusted to random numbers from 1 - 100 are generated
n = Math.floor(n) + 1;

//  Return the results of the love calculation as an alert
alert("There is a " + n + "%" + " chance that " + name1 + " and " + name2 + " are soulmates!!");

//--------------------------------------------------------------------------

// Create a love calculator

// Prompts user to enter the name of the first person
var name1 = prompt("Enter the first name");

// Prompts user to enter the name of the second perso
var name2 = prompt("Enter the second name");

// Multiplies a numbers 0 - 100
var loveScore = Math.random() * 100;

// Adjusted to random numbers from 1 - 100 are generated
loveScore = Math.floor(loveScore) + 1;

// Performs a calucation using an conditional if/ else statement
if (loveScore > 70) {
  alert("Your love score is " + loveScore + "%." + " You love each other like Kanye loves Kanye!!");
} else {
  alert("Your love score is " + loveScore + "%.");
}

//--------------------------------------------------------------------------

// Create a love calculator w/ comparison operators (improved)

// Prompts user to enter the name of the first person
var name1 = prompt("Enter the first name");

// Prompts user to enter the name of the second perso
var name2 = prompt("Enter the second name");

// Multiplies a numbers 0 - 100
var loveScore = Math.random() * 100;

// Adjusted to random numbers from 1 - 100 are generated
loveScore = Math.floor(loveScore) + 1;

// Performs a calucation using an conditional if/ else statement
if (loveScore > 70) {
  alert("Your love score is " + loveScore + "%." + " You love each other like Kanye loves Kanye!!");
}

// The && cpmparison statement used to compare LoveScore abouve 30 and loveScore less than or equal to 70
if (loveScore > 30 && loveScore <= 70) {
  alert("Your love score is " + loveScore + "%." + " Your love score is Good!");
}

if (loveScore <= 30) {
  alert("Your love score is " + loveScore + "%." + " You go together like oil and water..");
}

//--------------------------------------------------------------------------

function bmiCalculator(weight, height) {

  var bmi = Math.round(weight / Math.pow(height, 2));
  var interpretation;

  if (bmi < 18.5) {
    interpretation = "Your BMI is " + bmi + ", so you are underweight.";
  }

  if (bmi >= 18.5 && bmi < 24.9) {
    interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
  }

  if (bmi >= 25) {
    interpretation = "Your BMI is " + bmi + ", so you are overweight.";
  }

  return interpretation;

}

bmiCalculator(117, 2.2);

//--------------------------------------------------------------------------

function isLeap(year) {

  /**************Don't change the code above****************/

  //Write your code here.

  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return "Leap year.";
      } else {
        return "Not leap year.";
      }
    } else {
      return "Leap year.";
    }
  } else {
    return "Not leap year.";
  }

  /**************Don't change the code below****************/

}

isLeap(1948);

//--------------------------------------------------------------------------

// Working with arrays

// 1. Create a guest list arrar of names

var guestList = ['Paul','Anna','Max','Mark','Lizie'];

// 2. Create a prompt ask guest their name
var guestName = prompt("Enter name to continue");

// 3. Create an if else statement that welcomes them if name exist
    if (guestList.includes(guestName)) { alert("Welcome " + guestName + "!"); }

// 4. else says sorry, maybe next time if name dosent exists
    else { alert("Sorry " + guestName + ", Your name is not in our system."); }

//--------------------------------------------------------------------------

// Fizz Buzz programming chalange

// 1. create output array

var output = [];
var count = 0;

// 2. Create a function fizzBizz

function fizzBuzz() {

// Set count to increment by 1 each time the fizzBuzz function is called

    count++;

// Create an if statement that checks if count is dvisable by both 3 and 5 if true pushes FizzBuzz to the array
    if (count % 3 === 0 && count % 5 === 0) {
        output.push("FizzBuzz");
    }

// Create an else if statement that checks if count is dvisable by 3 and if true pushes Fizz to the array
    else if (count % 3 === 0) {
        output.push("Fizz");
    }

// Create an else if statement that checks if count is dvisable by 5 and if true pushes Buzz to the array
    else if (count % 5 === 0) {
        output.push("Buzz");
    }

// Create an else statement that pushes all other numbers to the console
    else {
        output.push(count);
    }

    console.log(output);
}

fizzBuzz();

//--------------------------------------------------------------------------

var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function whosPaying(names) {

/******Don't change the code above*******/

    //Write your code here.

    var randomNumber = Math.floor(Math.random() * names.length);
    var randomName = names[randomNumber];
    return randomName + " is going to buy lunch today!";

/******Don't change the code below*******/
}

whosPaying(names);

//-------------------------------------------------------------------------
