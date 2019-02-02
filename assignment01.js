/*********************************************************************************
* WEB222 - Assignment 01
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of
* this assignment has been copied manually or electronically from any other source (including web sites)
* or distributed to other students.
*
* Name: LENY FE FERNANDEZ             Student ID: 120818174               Date: January 26, 2018
*
********************************************************************************/

/*****************************
*
Task 1: Student Info
*****************************/

//a) Store student name, number of courses and program information in variables
var student_name = 'Leny';
var no_of_courses = 5;
var program = 'CPA';

//b) Output student info to the console
console.log(
  'My name is ' +
    student_name +
    " and I'm in " +
    program +
    " program. I'm taking " +
    no_of_courses +
    ' course in this semester.'
);

//c) Store "have" string in a variable
var part_time_job = 'have';

//d) Output updated info in the browser console
console.log(
  'My name is ' +
    student_name +
    " and I'm in " +
    program +
    " program. I'm taking " +
    no_of_courses +
    ' courses in this semester and I ' +
    part_time_job +
    ' a part-time job now.'
);

/*****************************
*
Task 2: Birth and graduate year
*****************************/

//a) store the current year which is 2018 to a variable
var current_year = 2018;

//b) prompt user for age and store it in a variable
var age = prompt('Please enter your age:');

//c) calculate birth year (current year minus the age), store the value in a variable and Output the result in the console
var birth_year = current_year - age;
console.log('You were born in the year of ' + birth_year);

//d) prompt user for expected number of years to study in college and store teh value in a variable
var yrs_college = Number(
  prompt('Enter the number of years you expect to study in the college:')
);

//e) calculate the graduate year (current year minus number of years in college), store the result in a variable, and output teh result in the console.
var grad_year = current_year + yrs_college;
console.log(
  'You will graduate from Seneca college in the year of ' + grad_year
);

/*****************************
*
Task 3: celsius and Fahrenheit temperatures
*****************************/

//a ) store a celsius temperature in a variable
var celsius_temp = 30;

//b) convert Celsius temperature to Fahrenheit, store the result in a variable, and output the result in the console
var fahrenheit_convert = celsius_temp * 9 / 5 + 32;
console.log(celsius_temp + '°C is ' + fahrenheit_convert + '°F');

//c) store a Fahrenheit temperature in a variable
var fahrenheit_temp = 86;

//d) convert Fahrenheit to Celsius temperature, store the result in a variable, and output the result in the console
var celsius_convert = (fahrenheit_temp - 32) * 5 / 9;
console.log(fahrenheit_temp + '°F is ' + celsius_convert + '°C');

/*****************************
*
Task 4: Even and Odd numbers
*****************************/
for (var num = 0; num <= 10; num++) {
  if (num % 2 === 0) 
  console.log(num + ' is even');
  else 
  console.log(num + ' is odd');
}

/*****************************
*
Task 5: Larger or largest number
*****************************/

// function to takes 2 arguments and returns the larger number.
//a)         declaration approach
function largerNum(num1, num2) {
 var largernum = (num1 > num2)? num1:num2;
  return largernum;
}

//b) Expression approach
var greaterNum = function(num3, num4) {
  var greaternum = (num3 > num4)? num3: num4;
  return greaternum;
};
console.log('The larger number of 12 and 30 is ' + largerNum(12, 30));
console.log('The larger number of 1 and 5 is ' + greaterNum(1, 5));

/*****************************
*
Task 6: Evaluator
*****************************/

//a) function Evaluator in declaration approach takes unknown number of arguments calculate average of arguments and return true or false
function Evaluator() {
  var total = 0;
  var average = 0;
  var ret;
  for (var num = 0; num < arguments.length; num++) {
    total += arguments[num];
  }
  average = total / arguments.length;

  ret = (average >= 50) ? true : false;

  return ret;
}

//b) call function Evaluator with different numbers of arguments and Output the result to web console
console.log(
  'Average of (50,25) greater than or equal to 50: ' + Evaluator(50, 25)
);
console.log(
  'Average of (20,50,30,60,45,123,89) greater than or equal to 50: ' +
    Evaluator(20, 50, 30, 60, 45, 123, 89)
);
console.log(
  'Average of (10,20,30,18) greater than or equal to 50: ' +
    Evaluator(10, 20, 30, 18)
);

/*****************************
*
Task 7: Grader
*****************************/

//a) Function Grader using expression approach takes single argument and returns grade
//A=100-80, B=79-70, C= 69-60, D=59-50, F=49-0
var Grader = function(num) {
  num = parseInt(num);
  var grade;
  if (num < 50) {
    grade = 'F';
  } else if (num < 60) {
    grade = 'D';
  } else if (num < 70) {
    grade = 'C';
  } else if (num < 80) {
    grade = 'B';
  } else {
    grade = 'A';
  }
  return grade;
};

//b)call function Grader with different numbers of arguments and Output the result to web console
console.log('Score 78 is Grade ' + Grader(78));
console.log('Score 89 is Grade ' + Grader(89));
console.log('Score 60 is Grade ' + Grader(60));

/*****************************
*
Task 8: ShowMultiples
*****************************/

//a) FUnction showMultiples using declaration approach takes 2 num arguments and output the multiples of the num argument

function showMultiples(num, numMultiples) {
  num = parseInt(num);
  numMultiples = parseInt(numMultiples);
  var output_array = [];
  for (var i = 1; i <= numMultiples; i++) {
    output_array[i - 1] = num + ' X ' + i + ' = ' + num * i + '\n';
  }
  output_array = output_array.join(' ');
  return output_array;
}

//b)call function showMultiples with different numbers parameters and Output the result to web console
console.log('Multiples of 10 from 1 to 5 \n ' + showMultiples(10, 5));
console.log('Multiples of 2 from 1 to 10 \n ' + showMultiples(2, 10));
console.log('Multiples of 5 from 1 to 8 \n ' + showMultiples(5, 8));
