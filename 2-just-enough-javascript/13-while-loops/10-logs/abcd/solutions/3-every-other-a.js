'use strict';

let letters = ' a b c d';

let index = 0;
while (index < letters.length) {
  
  // Replace the underscores with your desired actions
  if (index % 2) {
    console.log(letters[index]);
  }
  index++; 
}