/**
 * Data Types in JavaScript
 * ******
 * Number - includes (int & float)
 * BigInt
 * String
 * Null
 * Undefine
 * Object
 * Boolean
 * symbol (debatable)
 */

// the property "typeof" is used to check the datatype of a value or variable

//Number
let a = 50;
let aa = 3.14;
let aaa = 5 * "a";
console.log(typeof a);
console.log(typeof aa);
console.log(aaa);
console.log(typeof NaN);

//BigInt
let b = BigInt(5);
let bb = 55n;
console.log(b);
console.log(typeof b);
console.log(typeof bb);

//String
let c = "hello world";
let cc = "hello world";
let ccc = "Mary's father";
let cccc = "Mary's father";
let c5 = "10";

//String concatenation
let firstname = "john";
let lastname = "doe";
let fullname = firstname + " " + lastname;
let fullname2 = firstname.concat(" ", lastname);

console.log(fullname);
console.log(fullname2);

//String Template literals
let d = "The answer to 2 + 2 is ";
let dd = 4;
let result = d + dd;
console.log(result);

let result2 = `The answer to 2 + 2 is ${2 + 2}`;
console.log(result2);

/*** String method & properties
 * .length
 */

let e = "  Hello World  !  ";
console.log(e.length);
console.log(e.trim());

// .touppercase()
console.log(e.toUpperCase());

let access_token = "API_gddhdk73749hfhdo38";
console.log(access_token.startsWith("API"));

let ee = "hello world";
console.log((ee[0] + ee[4] + ee[ee.length - 1]).toUpperCase());

console.log(("ba" + 2 * "a" + "a").toLowerCase());

/** NULL (primitive datatype)
 * typically means absent of data
 */

let f = null;
console.log(typeof f);

//UNDEFINED
let ff = undefined;
console.log(typeof ff);

//BOOLEAN
let fff = true;
let ffff = false;
console.log(typeof fff);

//OBJECTS

const user = {
    firstname: 'john',
    lastname: 'doe',
    username: 'jondoe30',
    age: 30,
    email: 'john@doe.com',
    location: 'new york',
    status: 'offline',
    isVerified: true,
    favourite: {
        food: 'pizza',
        drink: 'water',
        color: 'purple'
    },
    'my password': 'eohaohpe-f97743ujt'
};
console.log(user)

/** Accessing an item in an object
 * using the dot notation
 */

console.log(user.firstname)


// bracket notation
console.log(user['my password'])
console.log(user['age'])
let firstname2 = "location"
console.log(user[firstname2])

// modifying an object in javascript using the dot notation
user.age = 31
console.log(user.age)

// appending an object
user.isAdmin = false
console.log(user)

// Using the bracket notation
user['age'] = 32
let isAdmin = 'isAdmin'
user[isAdmin] = true

console.log(Object.keys(user))


// symbols in JavaScript
let sym = Symbol('my symbol')
user[sym] = 'something something'
console.log(user)