/** Loops       06-08-2024
 * for general iterations
 * while Loops
 * do while loops
 * for loops
 */

// for Array iterations
/**
 * for Of loops
 * for In loops
 */

// while loop
/**
 * syntax:
 * while (condition) {
 * ...expressions
 * }
 */

let num = 0;

while (num < 10) {
  console.log(num);
  num++;
}

while (num <= 10) {
  console.log(num);
  num++;
}

let store = [];
let num2 = 10;
while (num2 > 0) {
  store.push(num2);
  num2--;
}

console.log(store);

let arr = ["food", "goods", false, { name: "john doe" }, 7, 15];

let idx = 0;
while (idx < arr.length) {
  console.log(arr[idx]);
  idx++;
}

// Do while loops     07-08-2024
/**
 * This runs once before it checks the condition
 * mostly used for testing e.g API
 * syntax:
 * do {
 *  ...expression
 * }  while (condition)
 * */

let num3 = 0;
do {
  console.log(num3);
  num3++;
} while (num3 < 10);

/**
 * For loop
 * it is the most common loop in programming
 * syntax:
 * for(init; condition; incr/decr) {
 *   ... expression
 * }
 */

for (let i = 0; i < 10; i++) {
  console.log(i);
}

let arr2 = ["pen", "book", "bag", "shoe"];

let arr3 = [];
for (let x = 0; x < arr2.length; x++) {
  arr3.push("my " + arr2[x]);
}
console.log(arr3);

for (let x = 0; x < arr2.length; x++) {
  arr2[x] = "my " + arr2[x];
}
console.log(arr2);

/** nested loops
 ** loop through the matrix and print every item in the matrix
 */
let arr4 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < arr4.length; i++) {
  for (let j = 0; j < arr4[i].length; j++) {
    // console.log(arr4[i][j]);
  }
}

// write a function that takes 2 param, an array and a string,
// loop over the array and using your if statement, return the index of the array item
// that matches the second para, if no match, reurn 'NOT FOUND'

// solution     07-08-2024

// function assignment(arr5, x){
//   for (i = 0; i < 0; i++){
//   } if (i === x){
//     return arr5[i-1]
//     }
//     else{
//       console.log('item not found!')
//     }
// }

// let check = assignment([1,2,3,4],2)

// console.log(check)

/** For of loop     13-08-2024
 *
 */

const arr6 = ["john", "mike", "jane", "smith"];

for (const item of arr6) {
  if (item === "mike") {
    console.log(item + " tyson");
  } else {
    console.log(item);
  }
}

/** for in loop -- get the index of the items in the array
 * syntax
 * for (const elem in array){
 *  ...expression
 * }
 */

for (const item in arr6) {
  // at each iteration, the item will rep the index of corresponding item in the array
  console.log(item);
}

/**
 * BREAK & CONTINUE
 * Break -- stops the loop
 * continue -- skips the
 */

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

// Array methods
const names = [
  "John",
  "Emily",
  "Michael",
  "Sarah",
  "William",
  "Olivia",
  "James",
  "Ava",
  "George",
  "Isabella",
  "Charles",
  "Sophia",
  "Frank",
  "Mia",
  "Joseph",
  "Charlotte",
  "Henry",
  "Amelia",
  "Robert",
  "Harper",
];

// map - returns a new array with modification of the original
// map with ordinary function as call back
const modname = names.map(attmy);
console.log(modname);

function attmy(item) {
  return "my " + item;
}

// map with anonymous function as call back
const modname2 = names.map(function (item) {
  return "my " + item;
});
console.log(modname2);

// map with arrow function as callback
const modname3 = names.map((item) => "my " + item);
console.log(modname3);

//FILTER
const arrnum = [4, 8, 3, 9, 6, 13, 14, 66, 33];
const arrnum2 = arrnum.map((item) => item * 2);
console.log(arrnum2);

// filters item that matches given criteria and returns to a new array
const namefilter = names.filter((x) => x.length < 5);
const namefilter2 = names.filter((x) => x === "michael");
console.log(namefilter);
console.log(namefilter2);

const even = arrnum.filter((x) => x % 2 === 1);
console.log(even);

const users = [
  {
    firstname: "John",
    lastname: "Doe",
    age: 30,
    country: "USA",
    state: "California",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    isActive: true,
    isVerified: false,
  },
  {
    firstname: "Jane",
    lastname: "Smith",
    age: 25,
    country: "Canada",
    state: "Ontario",
    email: "jane.smith@example.com",
    phone: "987-654-3210",
    isActive: true,
    isVerified: true,
  },
  {
    firstname: "Bob",
    lastname: "Johnson",
    age: 40,
    country: "UK",
    state: "London",
    email: "bob.johnson@example.com",
    phone: "555-123-4567",
    isActive: false,
    isVerified: false,
  },
  {
    firstname: "Alice",
    lastname: "Williams",
    age: 35,
    country: "Australia",
    state: "New South Wales",
    email: "alice.williams@example.com",
    phone: "111-222-3333",
    isActive: true,
    isVerified: true,
  },
  {
    firstname: "Mike",
    lastname: "Brown",
    age: 20,
    country: "Germany",
    state: "Berlin",
    email: "mike.brown@example.com",
    phone: "444-555-6666",
    isActive: false,
    isVerified: false,
  },
  {
    firstname: "Emily",
    lastname: "Davis",
    age: 28,
    country: "France",
    state: "Paris",
    email: "emily.davis@example.com",
    phone: "777-888-9999",
    isActive: true,
    isVerified: true,
  },
  {
    firstname: "David",
    lastname: "Miller",
    age: 38,
    country: "Japan",
    state: "Tokyo",
    email: "david.miller@example.com",
    phone: "333-444-5555",
    isActive: false,
    isVerified: false,
  },
  {
    firstname: "Sarah",
    lastname: "Taylor",
    age: 22,
    country: "Italy",
    state: "Rome",
    email: "sarah.taylor@example.com",
    phone: "666-777-8888",
    isActive: true,
    isVerified: true,
  },
  {
    firstname: "Kevin",
    lastname: "White",
    age: 45,
    country: "Spain",
    state: "Madrid",
    email: "kevin.white@example.com",
    phone: "999-000-1111",
    isActive: false,
    isVerified: false,
  },
  {
    firstname: "Olivia",
    lastname: "Martin",
    age: 32,
    country: "Sweden",
    state: "Stockholm",
    email: "olivia.martin@example.com",
    phone: "222-333-4444",
    isActive: true,
    isVerified: true,
  },
];

const onlineUser = users.filter((x) => x.isActive);
// .map(x=>x.firstname)
console.log(onlineUser);

// FOREACH
arrnum.forEach((x) => console.log(x));


users.forEach((x) =>
  console.log(
    `username of ${x.firstname} ${x.lastname} is ${x.firstname + x.lastname + x.age}`
  )
);

//SORT - takes two arg and return an array 
const sorted = arrnum.sort((a,b) => a-b);
console.log(sorted)