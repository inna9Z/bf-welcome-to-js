// #todo

'use strict';

// Declarete and Initialize the animal variable with a value of null.
let animal = null;

//Enter a while loop that continues until the animal variable is not null.
while (animal === null) {
  // Inside the loop, prompt the user to enter an animal using the prompt function. The entered animal name will be stored in the animal variable.
  animal = prompt('enter an animal, it will become bigger'); // After the user enters an animal name and the loop condition is satisfied, the loop terminates.
}


// Declare a variable named bigAnimal and initialize it with an empty string.
let bigAnimal = '';

// Use a for...of loop to iterate over each letter in the animal string.
for (let letter of animal) {

  // Inside the loop, convert each letter to uppercase using the toUpperCase method and assign it to the upperCase variable.
  let upperCase = letter.toUpperCase();

  // Concatenate each uppercase letter to the bigAnimal string using the + operator.
  bigAnimal = bigAnimal + upperCase;
}

// After the loop completes, display an alert dialog box that shows the original animal name and the bigAnimal name in uppercase.
alert(animal + ' -> ' + bigAnimal);
