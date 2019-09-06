/*jslint devel: true */

/*eslint no-console: "off", no-undef: "off" */


/*Topic 1: JavaScript - Introduction                                                 
Assignment 1: 
 
Write JavaScript code to display current date & time. 
 
Assignment 2: 
 
Write a JavaScript program to display “Welcome to JavaScript” on console 

//1

console.log(Date());

//2 

console.log("Welcome to JavaScript");
*/





// -------------------------------------------------------------------------------- //






/*Topic 2: JavaScript WhereTo 
 
Assignment 1: 
 
Create an external JS file called 'alert.js' which contains alert function with “Hello User “message. Include alert.js in your html head & body sections and observe the output. 
 
Assignment 2: 
 
Create an external JS file called 'combinations.js' which contains a JavaScript function that generates all combinations of a string. Include 'combinations.js in body sections and display the output. Example string : 'dog'  Expected Output : d,do,dog,o,og,g 

//1
 //alert("Hello User");


//2 

function displayCombinations(word){
    for(var i =0;i<word.length;i++){
        for(var j =i+1;j<word.length+1;j++){
            subS = word.substring(i,j) ;
            console.log(subS);
        }
    }
}

displayCombinations("dog");

function string_recurse(active, rest) {
    if (rest.length == 0) {
        console.log(active);
    } else {
        string_recurse(active + rest.charAt(0), rest.substring(1, rest.length));
        string_recurse(active, rest.substring(1, rest.length));
    }
}
string_recurse("", "abcd");
 */


// -------------------------------------------------------------------------------- //




/*Topic 3: JavaScript Output 
 
Assignment 1:  Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched". 

function luck(number){
    console.log(number);
    var userInput = prompt("Please anter a number");
    if (number == userInput){
        console.log("Good work");
    }else{
        console.log("Not matched");
    }
}

var randomNumber = Math.round( Math.random() * 10);
luck(randomNumber);
*/





// -------------------------------------------------------------------------------- //



/*
 Topic 4: JavaScript Statements & Comments 
 
Assignment 1:  Write a JavaScript program to sort an array of all prime numbers between 1 and a given integer. Add single & multi line comments wherever applicable. */

/*
function sortPrimes(number){
    var numbersPrime = new Array(); //create an empty array
    for (var i = 2;i<=number;i++){ //looping 
        if (isPrime(i)){
            numbersPrime.push(i);  //adding the new prime number
        }   
    }
    console.log(numbersPrime);
}


function isPrime(number) {   //prime test function
    var start = 2;
    var limit = Math.sqrt(number);
    while (start <= limit) {
        if (number % start++ < 1) return false;
    }
    return number > 1;
}


sortPrimes(20);

*/



// -------------------------------------------------------------------------------- //




/*
Topic 5: JavaScript Variables & Data Types 
 
Assignment 1: Write a Java Script program that should have two variables initialized with nos. You should add and display the sum only if they are numbers. If they are of any other type you should show a message "Sorry.... Only Nos will be added"   

function sum(a, b){
    if (typeof(a) === 'number' &&  typeof(b) === 'number'){
        console.log(a+b);
    }else{
        console.log("Sorry.... Only Nos will be added");
    }
}

sum('aaa',2);

*/





// -------------------------------------------------------------------------------- //





/* Topic 6:  JavaScript Operators 
 
Assignment 1: Write a program that outputs all possibilities to put + or - or nothing between the numbers 1, 2, ...,9 (in this order) such that the result is always 100.  For example: 1 + 2 + 34 – 5 + 67 – 8 + 9 = 100 

function solutions(accumulatedOutput, runningTotal, ...numbers) {
  if (numbers.length === 0) {
    if (runningTotal == 100) console.log(accumulatedOutput);
  } else {
    const [first, ...butFirst] = numbers;

    if (accumulatedOutput !== "") {
      // case one, addition
      solutions(
        `${accumulatedOutput}+${first}`,
        runningTotal + first,
        ...butFirst
      );

      // case two, subtraction
      solutions(
        `${accumulatedOutput}-${first}`,
        runningTotal - first,
        ...butFirst
      );
    } else solutions(`${first}`, first, ...butFirst);

    // case three, catenation
    if (butFirst.length > 0) {
      const [second, ...butSecond] = butFirst;

      solutions(
        accumulatedOutput,
        runningTotal,
        first * 10 + second,
        ...butSecond
      );
    }
  }
}

solutions("", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9);


Assignment 2:
Create a calculator application in javaScript where all arithmetic operations would work (Simple
arithmetic calculator) 

var total = 0;
var currentOperation = "";
var currentNumber = "";
function calculateWith(operation){
    if (operation != "="){
        total = parseInt(currentNumber);
        currentOperation = operation;
        currentNumber = "";
    }else {
        if (currentOperation == "+"){
            total = total + parseInt(currentNumber);
            console.log(total);
            resetNo();
        }else if (currentOperation == "-"){
            total = total - parseInt(currentNumber);
            console.log(total);
            resetNo();
        }else if (currentOperation == "*"){
            total = total * parseInt(currentNumber);
            console.log(total);
            resetNo();
        }else if (currentOperation == "/"){
            total = total / parseInt(currentNumber);
            console.log(total);
            resetNo();
        }
    }
}

function createNumber(pressedNumber){
    currentNumber = currentNumber + pressedNumber;
}

function resetNo(){
    total = 0;
    currentNumber = "";
    currentOperation = "";
}

*/





// -------------------------------------------------------------------------------- //




/*Topic 7: JavaScript Functions 
 
Assignment 1: 
 
Write a JavaScript function that computes the list of the first 100 Fibonacci numbers. By definition, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two. As an example, here are the first 10 Fibonnaci numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, and 34 


function fibonaciiNos(){
        var i;
        var fib = []; // Initialize array!

        fib[0] = 0;
        fib[1] = 1;
        for (i = 2; i <= 100; i++) {
          fib[i] = fib[i - 2] + fib[i - 1];
          console.log(fib[i]);
}
}

fibonaciiNos();


Assignment 3:
Write a JavaScript function to get the last 'n' elements of the array. If array has 6 elements and if
user gives 4, it has to return last 4 elements. If user gives ‘n’ which is greater than the number of
elements in the array, then it should return all elements.

function getLastElements(){
    var arrayElements = new Array();
    arrayElements = document.getElementById('array').value.split(" ");
    var arrayOutput = new Array;
    var noElements = parseInt(document.getElementById('elements').value);
    if (noElements > arrayElements.length) {
        noElements = arrayElements.length;
    }
    for (var i = arrayElements.length - 1;i >= arrayElements.length - noElements;i--){
        arrayOutput.push(arrayElements[i]);
    }
    document.getElementById("outputArray").innerHTML = arrayOutput;
}
*/



// -------------------------------------------------------------------------------- //




/*
Topic 8: JavaScript Objects 
Assignment 1: 
 
Create a JavaScript object stores a 'CD' details.     
a. CD name     b. CD publisher     c. CD price 
 
    A function 'displayAllDetails()' -->should show the CD Name, CD publisher and Final Price (Final Price is calculated as  final price+10% tax charges and 3% discount) 


var CD = {
        name: "Some name",
        publisher: "Some publisher",
        price: 20
}

function displayAllDetails(CD){
    var finalPrice = CD.price + CD.price*0.07;
    console.log("CD Name: "+CD.name+ " CD publisher: "+ CD.publisher + " final pice: "+ finalPrice );
}

displayAllDetails(CD);
*/





// -------------------------------------------------------------------------------- //


/*  Topic 9: JavaScript Scope: 
 
Assignment 1: 
 
 Write a JavaScript function to get the number of occurrences of a given letter in specified string. Take input string as global variable and letter as local variable in a function  

function numberOfOccurrences(){
    var letter = prompt("Give the letter");
    var c = 0;
    while (stringS.indexOf(letter) !== -1){
        c= c+1;
        stringS = stringS.substring(stringS.indexOf(letter)+ 1, stringS.length );
    }
    console.log("number of occurrences is "+ c);
}

var stringS = prompt("Give the string");
numberOfOccurrences();




*/


// -------------------------------------------------------------------------------- //



/*  Topic 10: JavaScript Events 
 
Assignment 1: 
 
Create a button called "Donate for a cause". Onclick of it, call a method that will prompt you to enter your donation amount and alerts it. (If the donation is in decimals, it should be rounded off to the nearest integer). 


function clickMe(){
    var donation = prompt("Please enter the donation");
    alert("The Donation is "+Math.floor(donation));
}

*/




// -------------------------------------------------------------------------------- //


/* Topic 11 :  JavaScript Conditions 
 
Assignment 1:  Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign. Sample numbers: 10, -7, 0 Output : The sign is -  

function product (a,b,c){
    var prod = a*b*c;
    if(prod>0){
        console.log("sign is +");
    }else if (prod<0){
        console.log("sign is -");
    }else{
        console.log("Product is 0 ")
    }
    
}

product(10,-7,1);



Assignment 2:
Write a JavaScript conditional statement to find the largest of five numbers and display the result
on the screen.
Sample numbers: -5, -2, -6, -8, -1
Output : -1

function getLargestNo(numbers){
    
    var minNo = numbers[0];
    for (var i = 1;i< numbers.length;i++){
        if (minNo < numbers[i]){
            minNo = numbers[i];
        }
      
    }
      console.log(minNo);
}

getLargestNo([2,3,-3,4,33]);
*/

// -------------------------------------------------------------------------------- //


/* Topic 12:  JavaScript Loops 
 
Assignment 4:  Write a JavaScript program to store 10 assessment marks in an array. Find the average marks and display



function averageMarks(){
    var avgArr = new Array ();
    var sum = 0;
    for (var i = 0; i< 10; i++){
        avgArr.push(Math.round(Math.random() * 10));
    }
    
    for (i = 0; i< avgArr.length; i++){
        sum =+ avgArr[i]; 
    }
    
    console.log("average mark is : "+ sum/avgArr.length);
}

averageMarks();
 */




// -------------------------------------------------------------------------------- //


/*
Topic 13: JavaScript jumping statements 
 
Assignment 2:  
 
Write a JavaScript program to sum the multiples of 3 and 5 under 1000. 


function sumMultiples(){
    var sum = 0;
    for (var i = 0; i<1000;i= i+15){
        sum+=i;
    } 
    console.log(sum);
}

sumMultiples();


*/





// -------------------------------------------------------------------------------- //


/*

Topic 14: JavaScript Errors 
 
Assignment 1:  
 
Write a JavaScript program to divide two numbers. If denominator is zero display error message by using try-catch blocks.




function divide(a,b){
    
   try {
       if(b === 0){
           throw "Big error ";
       }{
       var result = a/b;
       console.log(result);}
   } catch(err) {
       console.log("Big error: "+ err);
   }
}

divide(4,0);
*/






