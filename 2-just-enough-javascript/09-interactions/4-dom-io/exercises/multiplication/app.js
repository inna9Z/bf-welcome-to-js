import {
  whenFormDataChanges,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('calculator', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read user values ---
  let numberLeft = readNumber('left');
  let numberRight = readNumber('rigt')
  // --- multiply the numbers ---
  let sum = numberLeft * numberRight
  // --- create a message ---
  // --- display the message ---
  displayString('product', sum)
});
