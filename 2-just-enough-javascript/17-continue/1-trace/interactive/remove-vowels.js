// #todo

'use strict';

// The code enters a while loop that continues until the user provides a non-null input. Initially, the letters variable is set to null. As long as letters is null, the code will repeatedly prompt the user to enter some letters using the prompt() function.


let letters = null;
while (letters === null) {
  letters = prompt('enter some letters');
}

let noVowels = '';
for (let character of letters) {
  if ('aeiouAEIOU'.includes(character)) {
    continue;
  }
  noVowels = noVowels + character;
}

alert(letters + ' -> ' + noVowels);
