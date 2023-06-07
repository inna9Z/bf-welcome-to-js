// #todo

'use strict';
// Declare a variable named text and initialize it with a value of null.
let text = null;

// Enter a while loop that continues until the text variable is not null.
while (text === null) {
  // Inside the loop, prompt the user to enter some text using the prompt function. The entered text will be stored in the text variable.
  text = prompt('enter some text, each character will be repeated'); // After the user enters the text and the loop condition is satisfied, the loop terminates.
}

// Declare a variable named doubled and initialize it with an empty string.
let doubled = '';

// Use a for...of loop to iterate over each character in the text string.
for (let character of text) {
  // Inside the loop, concatenate each character to the doubled string twice by appending it to itself.
  doubled = doubled + character + character;
}

// After the loop completes, display an alert dialog box that shows the original text and the doubled text, where each character is repeated
alert(text + ' -> ' + doubled);
