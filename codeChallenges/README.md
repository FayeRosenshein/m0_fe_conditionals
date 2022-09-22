# Code Challenges

Below are 3 code challenges, increasing in complexity. You are required to complete 1 (of your choice) and encouraged to complete 2. If you are ahead on your schedule and have the time, you can absolutely complete all 3! For each challenge you want to work on, create a new Ruby file inside this `codeChallenges` directory and choose a name that makes sense.

After completing your selected challenge(s), create a short video to share with your Slack small group as part of your deliverable for this lesson. The video should include:
- You presenting the challenge itself
- You live-coding your solution
- You explaining what each part of the code does (this can be done while live-coding, or after)
- You demonstrating the program works as intended by running the code (you should run the code more than once to prove it works for all logic paths)
- You sharing what your struggled on or had questions about when you solved it the first time

var goodDrivingRecord = true
var isOver25 = true

if (isOver25 == true && goodDrivingRecord == true) {
  console.log("You can have a discount on your rental car");
} else if (isOver25 == false && goodDrivingRecord == false) {
  console.log("You need to have someone else sign for the rental car");
}  else {
  console.log("You have to pay full price on your rental car");
}









## Mild

Write a JavaScript program that defines a variable that stores an Number. The program should print out the String "even" if the Number is even, and the String "odd" if the Number is odd.

var number = 2

if (number % 2 == 0) {
  console.log("even");
} else {
  console.log("odd");
}

## Medium

Write a JavaScript program that prints out a String or Number: The printed value will depend on the value of an Number. If the Number is a mulitple of 3, print "Fizz". If the Number is a multiple of 5, print "Buzz". If the Number is a multiple of both 3 and 5, print "FizzBuzz". If the Number is not a multiple of either, print the Number itself.

var age = 27
var height = 5
var number = age*height

if (number % 3 == 0 && number % 5 == 0) {
  console.log("FizzBuzz");
} else if (number % 3 == 0) {
  console.log("Fizz");
} else if (number % 5 == 0) {
  console.log("Buzz");
}

## Spicy

Using the following variables:

```ruby
goodDrivingRecord = true
isOver25 = true
```

Write a program that evaluates the status of the variables above, and uses logic to print one of three possible messages:
- If the driving record is good and user is over 25 years old, they should get a discount on the car rental
- If the user either has a good record or is over 25 years old, they should pay full price
- If the user is not over 25 and has a bad driving record, they need to have someone else sign for the rental

var goodDrivingRecord = true
var isOver25 = true

if ( goodDrivingRecord === true && isOver25 === true) {
  console.log("You get a discount on your rental car");
} else if (goodDrivingRecord === false && isOver25 === false) {
  console.log("You need someone to sign the rental car for you");
} else {
  console.log("You have to pay full price for your rental car");
}
