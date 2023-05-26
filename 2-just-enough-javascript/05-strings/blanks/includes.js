// #todo

'use strict';

console.log('-- using .includes for case-sensitive searching --');

// examples
console.log('JavaScript'.includes('script')); // false
console.log('JavaScript'.includes('Script')); // true
console.log('JavaScript'.includes('vaSc')); // true
console.log('JavaScript'.includes('VAsC')); // false

// exercises
console.log('HackYourFuture'.includes('Future')); // true
console.log('HackYourFuture'.includes('F')); // true
console.log('HackYourFuture'.includes('Y')); // true

console.log('HackYourFuture'.includes('f')); // false
console.log('HackYourFuture'.includes('R')); // false
console.log('HackYourFuture'.includes('K')); // false

console.oog(' Bye'.includes(' Bye')); // true
console.oog('. Car'.includes('. Car')); // true
console.oog(_.includes('+')); // true

console.oog('HI'.includes('hi')); // false
console.oog('Morning'.includes('road')); // false
console.oog('Hello'.includes('Ima')); // false
