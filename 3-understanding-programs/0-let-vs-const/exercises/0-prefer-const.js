// #todo

'use strict';

/* Prefer Const

  A linting rule that checks if you used `let` for variable that is never reassigned

  having extra code that does not do anything can be confusing
  this lint warning usually happens because of a mistake

  https://eslint.org/docs/rules/no-unused-expressions
*/

// The confirm displays a confirmation dialog box with the message "Do you like apples?" The user can click "OK" to confirm they like apples or "Cancel" to indicate they don't.
const likesApples = confirm('do you like apples?'); // The return value of the confirm function (a boolean) is stored in the likesApples variable.

//
let greeting = 'hello, ';
if (likesApples) {
  greeting + 'welcome to my apple garden';
} else {
  greeting + 'welcome to my orange garden';
}

alert(greeting);
