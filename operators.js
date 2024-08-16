// operators in JavaScript

/**
 * Assignment Operators
 * Arithmetic Operators
 * Incriment Operators
 * Comparison Operators
 * Logic/Boolean Operators
 */

// Assignment operator (=)
// This resolves what is on the RHS and assign to a var on the LHS
let js1 = "item";
let js2 = js1 + " Hello";

// Arithmetic Operators
// Addition (+)
console.log(2 + 2);

// Subtraction Operator (-)
console.log(5 - 3);

// Multiplication Operator (*)
console.log(2 * 3);

// Division Operatior (/)
console.log(10 / 3);

// Modulus Operator (%)
console.log(10 % 3);

// Exponent Operator (**)
console.log(4 ** 5);

// Increment and Decrement Operators
// Increment/decrement by any number (+=, -=, *=, /=)
var a = 2;
a = a + 4;
a += 4;
console.log(a);

var b = 6;
b -= 3;

// increment/decrement by 1(--,++)
a++;
b = b--;

// exercise1
a = a + 10;
a--;
a = 4;
console.log("a = ", --a);

// Comparism operators
// greater than (>)
console.log(45 > 5);

// less than (<)
console.log(45 < 5);

// less than or equal to (>=)
console.log(23 >= 23);

// less than or equal to (<=)
console.log(40 <= 42);

// equality operator (==)
console.log(5 == "5");

// strict equality (===)
console.log(5 === "5");

// not operator (!)
console.log(!true);

// not equal operator (!=)
console.log(5 != 5);

// strict inequality (!==)
console.log(5 !== "5");


/*** Logic Operators    17 - 07 - 2024
 * AND (&&)
 * OR (||)    */

// In OR: 1 of the compared statement must be true for the expression to be true
console.log(true || true) //true
console.log(true || false) // true
console.log(false || true) // true
console.log(false || false) //false


// In AND: both conditions must be true for this to pass
console.log(true && true) // true
console.log(true && false) // false
console.log(false && true) // false
console.log(false && false) //false