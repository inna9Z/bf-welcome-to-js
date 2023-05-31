'use strict';

let text = null;
while (text === null) {
  text = prompt('enter some text, each character will be doubled:');
}

let doubled = '';
for (let nextChar of text) {
  doubled = doubled + nextChar + '-';
}

alert(doubled);

/*  ===== Challenges =====
  - Add a hyphen after each character.
  - Add a hyphen only between the characters.
*/

