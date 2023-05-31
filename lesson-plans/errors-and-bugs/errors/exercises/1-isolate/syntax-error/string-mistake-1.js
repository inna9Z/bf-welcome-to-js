

'use strict';

console.log('--- in execution phase ---');


/*
  environment: Chrome

  name: SyntaxError
  message: Invalid or unexpected token

  location: line 23

  life cycle: execution

  the mistake: the string a being defined across two lines without proper line continuation

  the fix(es): To fix this, you can  remove spase 
*/

const a = 'this is two lines';


