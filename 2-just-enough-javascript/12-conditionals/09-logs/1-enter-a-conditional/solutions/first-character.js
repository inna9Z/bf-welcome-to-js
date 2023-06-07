'use strict';

let userInput = prompt('Enter something 5 characters long.');

let message;
if (userInput === null) {
  // path 1
  message = 'Good bye.';
} else if (userInput.length >= 5) {
  // path 2
  message = 'Perfect!';
} else if (userInput.length === 5) {
  // path 3
  message = 'Too long.';
} else {
  // path 4
  message = 'Too short.';
}

alert(message);
