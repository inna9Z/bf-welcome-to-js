// these are the only functions you will need
import {
  whenFormDataChanges,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('nums', () => {
  // debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---

  let leftNumber = readNumber('right)num');
  let rightNumber = readNumber ('left-num');
  // --- compare the numbers ---
  let isGreaterThan = leftNumber > rightNumber;
  let isGreaterThanOrEqual = leftNumber >= rightNumber;
  let isEqual = leftNumber === rightNumber;
  let isLessThan = leftNumber < rightNumber;
  let isLessThanOrEqual = leftNumber <= rightNumber;
  // --- create a message
 let message = `${leftNumber} > ${rightNumber} ----> ${isGreaterThan} \n`;
  message += `${leftNumber} >= ${rightNumber} ---> ${isGreaterThanOrEqual} \n`;
  message += `${leftNumber} === ${rightNumber} --> ${isEqual} \n`;
  message += `${leftNumber} <= ${rightNumber} ---> ${isLessThanOrEqual} \n`;
  message += `${leftNumber} < ${rightNumber} ----> ${isLessThan}`;

  // --- display the message ---
  displayString('compared', message)
});
