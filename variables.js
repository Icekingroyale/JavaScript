console.log('testing');

// comments in JavaScript are of two types:
// Single line comments and mult-line comments

// is an example of single line comments

/* multi-line 
comments */

/**
 * 
 * @param {number} a - first parameter for a number 
 * @param {boolean} b - second parameter for a boolean 
 * @author {Iceking}
 */
function find(a, b) {
    console.log(a + b);
}

// find()

let x = 6 /*+ 8 - 4*/ * 2;

// Variables in JavaScript
/**
 * var - variables created with var can be recreated(redeclare) and reassigned
 * let - variables declared with "let" cannot be redeclared but can be reassigned
 * const - constant; cannot and should not change ie they can't be redeclared or reassigned
 */

// VAR
var a = 5; // declaring a variable
a = 5; // assigning to a variable
var aa = 55; // declaring and assigning to a variable


//  LET
let b;
b = 10;
// let b = 10;
b = 55

// const
const c = 20;
// const c = 30;
// c = 50

// Variable naming convention
/**
 * variable names should not start with a number e.g 55box
 * variable names should not hava space between them e.g first name
 * variable names should notstart with special character other than underscore (_) e.g #name
 * variables should start with alphabet or underscore(_) e.g last, _email
 * variables can contain or end with a number e.g box55, b4u
 * 
 * variables should be named using the the following patterns;
 * 
 * camelCase - firstName
 * PascalCase - FirstName
 * lowercase - firstname
 * UPPERCASE - FIRSTNAME
 * snake_case - first_name
 */