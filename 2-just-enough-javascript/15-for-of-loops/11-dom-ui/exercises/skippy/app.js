import {
  whenFormDataChanges,
  readString,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('skippable', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
   let number = readNumber ('skip-size')
   let phrase = readString ('phrase')
  // --- skip characters ---
  let output = '';
  for (let i = 0; i < phrase.length; i++) {
    if (i % number !== 0) {
      output += phrase[i];
    }
  }
  // --- display the result ---
   displayString ('skipped', output)
});
