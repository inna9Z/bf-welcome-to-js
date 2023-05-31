'use strict';

console.log('--- in execution phase ---');

/*
  environment: Chrome

  name: ReferenceError
  message: Cannot access 'tomatoes' before initializatio

  location: line 20

  life cycle: execution

  the mistake: By declaring the tomatoes variable first,

  the fix(es):  Move the declaration of the tomatoes variable before the console.log statement.
*/

let tomatoes = 'fresh';
console.log(tomatoes);


