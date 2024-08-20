// Practice Log                 16-08-2024
/**
 * write a function that takes a string as an input 
 * and returns the reversed string
 */


function reverse_string(str) {
    return str.split('').reverse().join('')
}

console.log(reverse_string('berserk'))
console.log(reverse_string('moonpie'))


/**
 * write a function that takes an array of numbers as input 
 * and returns the maximum number in the array 
 */
function maxnum(array){
    let max = []
    for(let i = 0; i < array.length; i++){
        if(array[i] > max) {
            max = array[i]
        }
    }
    return max
}

console.log(maxnum([0,9,0,3,4,7,7,7,2,1,4]))
console.log(maxnum([22,94,84]))


