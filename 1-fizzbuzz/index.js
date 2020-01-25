/*
Description: a program that counts from 1 to a given integer, printing out _fizz_ if the number is divisble by 3, _buzz_ if it is divisible by 5, and _fizzbuzz_ if it is divisible by both 3 and 5.
Input: an integer
Output: a list of numbers, with fizz if dividable by 3, buss if divisable by 5, and fizzbuzz if divisable by both
Usage: 1-fizzbuzz <integer>
*/

// get input using getargs
const getargs = require("../modules/getargs")
let input = getargs.getIntegerArg()

// test that input is a number and exit with error
if (isNaN(input) || !Number .isInteger(input) ) {
console.log("usage :node 1-fizzbuzz <integer>");
}
else {
  // iterate from 1 to the value of input
  for (let i = 1; i<=input; i++) {
    
    //TODO provide for tests for divisible for 3,5, and 15 to create desired output
    if (i % 15 ==0 ) {
      console.log(`${i} fizzbuzz`);
    } else if (i % 3 ==0 ) {
      console.log(`${i} fizz`);
    } else if (i % 5 ==0 ) {
      console.log(`${i} buzz`);
    } else {
      console.log(`${i}`);
    }

  }
}


