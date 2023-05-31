

'use strict';

console.log('--- in execution phase ---');


/*
  environment: Crhrome

  name: SyntaxError
  message: Unexpected token '{'

  location: line 27 

  life cycle:

  the mistake:  The condition in else (userName.length < 5) is missing an if keyword

  the fix(es): Add if keyword to condition in else (userName.length < 5)
*/

let userName = 'indrogo';

if (userName.length < 3) {
  console.log('too short');
} else if (userName.length < 5) {
  console.log('just right');
} else {
  console.log('too long');
}


