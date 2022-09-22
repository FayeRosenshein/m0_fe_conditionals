// In the exercises below, write your own code where indicated
// to achieve the desired result.

// One example is already completed. Your task is to complete
// any remaining prompt.

// Make sure to run the file in your command line using `node <filename>.js`


// -------------------
// PART 1: Comparing variables
// -------------------

var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
// this should log: true

numberTeachers < numberStudents


// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers?
// this should log: false

console.log(numberTeachers === numberTeachers);


// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
// this should log: true

console.log(numberTeachers !== numberStudents);

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
// this should log: true

console.log(numberStudents >= 20);

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
// this should log: false

console.log(numberStudents >= 21);

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
// this should log: true

console.log(numberStudents <= 20);

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
// this should log: true

console.log(numberStudents<= 21);


// #-------------------
// PART 2: Articulating what you are doing
// #-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
// YOU DO: Explain.

// This will look at the comparison and then print out the answer, true or false. In this case the answer will be true


var books = 3;
console.log(4 < books);
// YOU DO: Explain.

// This will look at the comparison in the log then go back and look at the variable 'books' defined as 3 and then make
// the comparison of if 4 is less than 3 which will be false

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Explain.

//This will look at the comparison in the log then go back and look at the variable 'friends' defined as 6 and then
//the variable 'siblings' defined as 2 and make the comparison of if 6 is greater than 2 which will be true

var attendees = 9;
var meals = 8;
console.log(attendees != meals);
// YOU DO: Explain.

//This will look at the comparison in the log then go back and look at the variable 'attendees' defined as 9 and then
//the variable 'meals' defined as 8 and make the comparison of if 8 not strictly equal to 9 which will be true

// #-------------------
// PART 3: Logical Operators
// #-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
// false

// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);
// true

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
console.log(lovesToPlay && lovesTreats);


// Determine if the dog loves to play and loves the dog park
console.log(lovesToPlay && lovesDogPark);

// Determine if the dog loves to play or loves the dog park
console.log(lovesToPlay || lovesDogPark);

// Determine if the dog loves to play and is a puppy
console.log(lovesToPlay && age < 1);
// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER: The answer is false because a dog must be younger than 1, not younger than or equal to 1
