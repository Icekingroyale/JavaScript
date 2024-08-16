/**     25-07-2024
 * if
 * else
 * else if  
 * switch
 * tenary operator (es6 - ECMA 2015)
 */

/**
 * IF statement is used in logically comparing two values
 * and the underlying expression runs when the statement is true
 *
 * syntax:
 * if (bool expression){
 *     ...underlying expression
 * }
 */

let day = "friday";
if (day === "Friday") {
  console.log(true);
}

if (10 === "10") {
  console.log(true);
}

/**
 * else statement
 * syntax:
 * if (condition){
 *     ...expression
 * } else {
 *     ...expression
 * }
 */

if (day === "Friday") {
  console.log(true);
} else {
  console.log(false);
}

if (10 === "10") {
  console.log(true);
}

/**
 * else if
 * syntax:
 * if (condition) {
 *   ...expresion
 * } else if {
 *   ...expression
 * }
 *...
 * else {
 *   ...expression
 * }
 */

if (day === 'Friday'){
    console.log('day is Friday')
} else if (day === 'friday'){
    console.log('day is friday')
} else if (typeof day === 'number'){
    console.log(true)
} else{
    console.log('An error occured')
}

let ans;
let num = 10
let rand = 'e' * num
if (num > 20){
    ans = num
} else if (num == '10' && typeof num === 'string'){
    num + 10
    ans = num * 2
} else if (num === 'hello world' || rand === NaN){
    num = 'Not Sure'
    ans = 'i am ' + num;
    console.log(ans)
} else {
    console.log(num)
}

/**
 * switch statement is used to run compare multiple values to one single value
 * syntax:
 * swich(){
 *   case:
 *        expression;
 *        break;
 *   case:
 *        expression;
 *        break;
 *   default:
 *        expression;
 * }
 */

let day2 = 'wednesday'
switch(day2){
    case 'monday':
        console.log('the day is monday')
        break
    case 'tuesday':
        console.log('the day is tuesday')
        break
    case 'wednesday':
        console.log('the day is wednesday')
        break
    case 'thursday':
        console.log('the day is wednesday')
        break
    case 'friday':
        console.log('the day is friday') 
        break
    case 'saturday':
        console.log('the day is saturday')
        break
    case 'sunday':
        console.log('the day is sunday')
        break
}