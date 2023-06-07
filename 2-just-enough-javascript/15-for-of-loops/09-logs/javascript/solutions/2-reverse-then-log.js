'use strict';

let backwards = 'tpircsavaj';

// use a for-of loop to reverse `backwards`
//  assign the reversed string to `language`
let language = '';

for (let letters of backwards) {
  language = letters + language
}
console.log(language);

// log each character in `language`
