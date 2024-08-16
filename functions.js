console.log("hello functions");

// function - is a block of code that can be used muliple times
/**
 * syntax:
 * function functionName (...parameters){
 *      expression
 * }
 */


// takes no arg
function sum2() {
  console.log(5 + 5);
}

sum2();
sum2();
sum2();

// takes args
function sum3(a, b) {
  console.log(a + b);
}

sum3(10, 4);
sum3(3, 6);
sum3(11, 2);

sum3(5); // NaN because only one arugment is given

function greet(name) {
  console.log(`hello ${name}, welcome to my site`);
}

greet("Neskido");
greet("Barry");
greet("Mike");
greet(); // this will append undefined to the string

// default params 
function mean(x = 0, y = 0) {
  console.log((x + y) / 2);
}

mean(10, 20);
mean(60);

function greet2(name = "user") {
    console.log(`Hello ${name}`);
}

greet2();
greet2("Emma");

// Annoymous function - do not have a name but its almost same thing with others
// callback function - is a functions that calls another function

const greet3 = function (name = "user") {
  console.log(`hello ${name}, welcome to my site`);
};

greet3();
greet3("Emma");

//Return statement - is used to return the value of a function computation to the programe,
// trim removes white space from the begining and ending
function validator(val) {
  let cleanVal = val.toLowerCase();
  cleanVal = cleanVal.trim();

  return cleanVal;
}

let val = validator("John dOe");

console.log(val);

const validator2 = function (val) {
  let cleanVal = val.toLowerCase();
  cleanVal = cleanVal.trim();

  return cleanVal;
};

let val2 = validator2("Barry");
console.log(val);

// write a function that take an array parameter named arr and returns the last item in the array
function lastItem(arr) {
  return arr[arr.length - 1];
}

let x = lastItem([5, 10, 69, 10]); // 10
let y = lastItem(["pen", "book", "car"]); // car
let z = lastItem([true, false, null, [3, 7], 1]); //[3,7]

console.log(x, y, z);

// write a function getItem that take an array parameter named arr and a number param named param named n.
// the function should return the last item that matches the index n in the array

function getItem(arr, n) {
  return arr[n];

}
let xx = getItem([5, 10, 69, 10], 2); // 69
let yy = getItem(["pen", "book", "car"], 0); //pen
let zz = getItem([true, false, null, [3, 7]], 1); // false
  

console.log(xx, yy, zz);


// Arrow functions in JavaScript - es6
/**
 * syntax
 * const varName = () => {}
 */

const validator3 = (val) => {
    let cleanVal = val.toLowerCase();
    cleanVal = cleanVal.trim();
  
    return cleanVal;
}

const simple = (a,b) => {
    return a > b;
}

const simpler = (a,b) => a > b;


console.log(simple(5,10))
console.log(simpler(5,10))


/** Scope 
 * This helps in understanding the accessibility of a var in programming languages
 * types:
 * Global scope
 * Local / Function / Block scope
 */ 

