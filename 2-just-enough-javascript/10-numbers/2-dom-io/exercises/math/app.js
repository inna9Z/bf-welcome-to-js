// these are the only functions you will need
import {
  whenFormDataChanges,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('numbers', () => {
  // debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---

  let leftNumber = readNumber('left-num')
  let rightNumber = readNumber('right-num')

  // --- do the math ---
  let sum = leftNumber + rightNumber;
  // --- create a message
  displayString('sum', sum);
  // --- display the message ---
});
