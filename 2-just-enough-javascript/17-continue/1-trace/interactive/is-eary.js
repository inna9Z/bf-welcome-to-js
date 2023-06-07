// #todo

'use strict';

let message = '';

while (true) {
  let input = prompt('enter something that includes "ear"');

// If the user clicks "Cancel" or closes the prompt dialog, input will be null. In this case, an alert message saying "there is no escape" is displayed, and the loop continues to prompt for input by using the continue statement.

  if (input === null) {
    alert('there is no escape');
    continue;
  }

// if the user enters a string that includes the substring "ear", indicated by input.includes('ear'), the message variable is updated with the input enclosed in double quotes and the message "'input' includes 'ear'". For example, if the user enters "bear", the message will be '"bear" includes "ear"'.

  if (input.includes('ear')) {
    message = '"' + input + '" includes "ear"';
    break;
  }
}

// After the loop exits, an alert is displayed with the final message.
alert(message);
