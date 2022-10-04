console.log("JavaScript")


//First Understand "How to intialize Comments"
//1. JavaScript is fun. Single line comment
/*
2. comment are shown here. Multiple line comment
*/

// Different types of variable
var name= "John";
const PI= 3.14;
let value=" david";

//Understand console.log
var a;
var b=5;
console.log(a);
a=10;
console.log(a);

//intializing variables with respect to assignment operator:
var a = 5;//here " =  is assignment operator" 
var b = 10;
console.log(a);
console.log(b);

// Variable is Case Sensitivity:
var carBrand;
var carbrand = "Ford" ;// carBrand and carbrand are both different variables.
console.log(carbrand);

//Adding, Multiplication and division of Two Values:
var sum =10 + 20;
console.log(sum);
var multi, divide;
multi = 3 * 3;
divide =  10/2;
console.log(multi);
console.log(divide);

// Increment and Decrement Operator:

var increment= 50;
increment++;
console.log(increment);

var decrement = 40;
decrement--;
console.log(decrement);

// Intialize a Decimal Numbers:
var decimal= 0.234;
console.log(decimal);

// reminder values:

var reminder;
reminder = 11%3;
console.log(reminder);
 
//Augment MAth  Operator:
var m1=22;
var m2=14;
m1 += 20;
console.log(m1);
m2 -= 2;
console.log(m2);
m1 *=5;
m2 /= 2;
console.log(m1,m2);

//Concatenate a String:
var str = "My name is" + " John";
console.log(str);



//bracket notation:
var first ="kevin";
var name_value= first[2];
console.log(name_value);


//Arrays:
var myarray=[50,60,70];
var mydata = myarray[1];
console.log(mydata);
// replace or change the elements in the array
myarray[1] = 70;
console.log(myarray);

// access of multi dimensional array:
var myarray = [[1,2,3],[3,4,5],[[[1,2,3],6],7,8]];
var output = myarray[2][0][0];
console.log(output);

//Introduce a function;
function string(){
  console.log("Hello! This is the function.");
}
string();                 //calling a function.

//function with mathematics values:
function math(a,b){
  console.log(a-b);
  console.log(a+b);
  console.log(a*b);
  console.log(a/b);
}
math(10,5);


