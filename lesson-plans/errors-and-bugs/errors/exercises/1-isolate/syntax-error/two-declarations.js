'use strict';

console.log('--- in execution phase ---');

/*
  environment: Chrome

  name: SyntaxError
  message: Identifier 'tree' has already been declared

  location: line 22

  life cycle: execute

  the mistake: declaring the tree variable twice with the let keyword

  the fix(es): remove the second declaration of let 
*/

let tree = 'oak';

 tree = 'birch';
