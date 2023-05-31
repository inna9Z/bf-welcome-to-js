// #todo

'use strict';

// combining .toUpperCase or .toLowerCase with .includes is helpful
//  you can now search strings without worrying about upper or lower case

console.log('-- case insensitive string searches --');

// examples
console.log('JavaScript'.toLowerCase().includes('script')); // true
console.log('JAVASCRIPT'.toLowerCase().includes('script')); // true
console.log('javascript'.toLowerCase().includes('script')); // true

console.log('JavaScript'.toUpperCase().includes('SCRIPT')); // true
console.log('JAVASCRIPT'.toUpperCase().includes('SCRIPT')); // true
console.log('javascript'.toUpperCase().includes('SCRIPT')); // true

// exercises
//  fill in the blanks with something that will evaluate to true
//  there's many different answers! how many can you find?

// exercises
//  fill in the blanks with something that will evaluate to true
//  there's many different answers! how many can you find?

console.log('PassPort'.toLowerCase().includes('pass')); // true
console.log('hACK YouR FuTuRE'.toLowerCase().includes('your')); // true
console.log('_Robin_Batman'.toLowerCase().includes('batman')); // true

console.log('PassPort'.toUpperCase().includes('Pas')); // false
console.log('hACK YouR FuTuRE'.toUpperCase().includes('your')); // false
console.log('_Robin_Batman'.toUpperCase().includes('BATman')); // false

console.log('Tim and Sophie'.toLowerCase().includes('tim')); // true
console.log('Tuo Wans'.toLowerCase().includes('o w')); // true
console.log('Swen. Elen'.toLowerCase().includes('. e')); // true

console.log('Tim and Sophie'.toUpperCase().includes('TIM')); // true
console.log('Tuo Wans'.toUpperCase().includes('O W')); // true
console.log('Swen. Elen'.toUpperCase().includes('. E')); // true≠`≠`=