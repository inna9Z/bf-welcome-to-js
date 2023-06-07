// #todo

'use strict';

/*


  Data In:

  Data Out:

  Test Cases:

*/

/* ---   ?   --- */

// normalPhrase <- null

let normalPhrase = null;
// WHILE: normalPhrase === null
//   normalPhrase <- prompt('enter something to flipflop')
// :END WHILE

while (normalPhrase === null) {
  normalPhrase = prompt('enter something to flipflop')
}

/* ---   ?   --- */

let previous = '';
// previous <- ''

let flipFlopped = '';
// flipFlopped <- ''

// FOR: current OF normalPhrase
//   IF: previous !== ''
//     flipFlopped <- flipFlopped + current + previous
//     previous <- ''
//   ELSE:
//     previous <- current
//   :END IF
// :END FOR-OF


for (let current of normalPhrase) {
  if (previous !== '') {
    flipFlopped = flipFlopped + current + previous;
     previous = current
  }
  else {
    previous = current
  }
}
/* ---   ?   --- */

// IF: flipFlopped.length < normalPhrase.length
//   flipFlopped <- flipFlopped + normalPhrase[normalPhrase.length - 1]
// :END IF

/* ---   ?   --- */

if (flipFlopped.length < normalPhrase.length) {
  flipFlopped = flipFlopped + normalPhrase[normalPhrase.length - 1]
}

alert(flipFlopped);
// alert(flipFlopped)
