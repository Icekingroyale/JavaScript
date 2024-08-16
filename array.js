// Creating Array in JavaScript
// Array is a collection of items of different datatypes used to group values

// using Array object
const arr = new Array("book", "pen", false, undefined, 55, NaN);

// using square bracket
const arr2 = ["book", "pen", false, undefined, 55, NaN];

// creating an array and populating it
const arr3 = [];
arr3[0] = "book";
arr3[1] = "pen";
arr3[2] = false;

// accessing items in an array using the index
console.log(arr2[2]);

// nested array
// This is an array nested inside another array
const arr4 = ["pen", "books", false, [1, 5, true], "car", { name: "john Doe" }];
// accessing a nested array
console.log(arr4[3][2]);

const arr5 = [[1, 2, 3], [10, 20, 30], [100, 200, 300], [1000, 2000, 3000]];
console.log(arr5[0][0]);

// array methods & properties
// .length property
console.log(arr5.length);

// .push property
// adds items to the end of the array
arr5.push("test");
arr5.push(4000, 5000, 6000);
arr5.push("a", "b", "c");

//.pop
// deletes items at the end of the array it returns that item
const item = arr5.pop();
console.log(arr5)
console.log(item)

//.shift()
// Removes the first element from an array and returns it. 
// If the array is empty, undefined is returned and the array is not modified.
const item2 = arr5.shift()
console.log(arr5)
console.log(typeof item2)

//.unshift()
// Inserts new elements at the start of an array, 
// and returns the new length of the array.
arr5.unshift(item)
console.log(arr5)

// other methods
let str = 'hello world'
const splitArr = str.split(' ')
console.log(splitArr)
console.log(splitArr.join(''))