

'use strict';

console.log('--- in execution phase ---');


/*
  environment: Chrome 

  name: SyntaxError
  message: Invalid left-hand side in assignment

  location: line 25

  life cycle: execute

  the mistake: assign a value to the boolean literal true

  the fix(es): you need to reverse the assignment and assign the value of the isHappy variable to true instead.
*/

let isHappy = false;

isHappy = true;


