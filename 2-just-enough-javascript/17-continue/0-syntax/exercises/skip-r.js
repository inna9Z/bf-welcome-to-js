// prettier-ignore
{ // so prettier does not remove the extra spacing

'use strict';

// ::::: don't forget to trace the program! :::::

// In this code, the for...of loop iterates over each character in the animal string.
// If the current character is 'r', the continue statement is encountered, and the loop moves on to the next iteration without executing the console.log(char);
// For all other characters, the loop prints them using console.log(char);.



let animal = 'horse';


for (let char of animal) {


    if (char === 'r') {

        continue; // <-- a keyword

    }


    console.log(char); // h o s e

}


