/* Using your knowledge about scope and variable declarations in JavaScript, 
look at the following code snippets and predict what the output or error will be and why. 
Copy the following episodes into a JavaScript file and add comments under each one
 detailing the reason for your predicted output. 
 */

 // Episode 1 

//  const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
//   };
  
//   const declareMurderer = function() {
//     return `The murderer is ${scenario.murderer}.`;
//   }
  
//   const verdict = declareMurderer();
//   console.log(verdict);

/* Prediction - verdict = "The murderer is Miss Scarlett.". 
This is because the constant variable 'verdict' is asigned the return value from the constant 
function 'declareMurderer', which is the string literal that referneces the 'murderer' key 
from our 'scenario' object. 
*/

// Episode 2 

// const murderer = 'Professor Plum';

// // const changeMurderer = function() {
// //   murderer = 'Mrs. Peacock';
// // }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// // changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

/* Prediction - Type error. 
This is because, even though we have a function 'changeMurderer'
that changes the value of 'murderer', it is a constant variable and can not be changed. 
*/

// Episode 3 

// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

/* Prediction - firstVerdict  = " The murderer is Mrs. Peacock. "
                secondVerdict = " The murderer is Professor Plum. "
This is because the 'let murderer' variable within the declareMurderer function is not
accessible globally. When we call the 'murderer' variable in the string literal for the 
secondVerdict assignment, it call only see the initial 'let murderer' variable initialised 
at the beginning. 
*/

// Episode 4 

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

/* Prediction - "The suspects are Miss Scarlet, Professor Plum, Colonel Mustard."
                "Suspect three is Mrs. Peacock."
This is again because the suspectThree variable within the function 'declareAllSuspects' 
is not accessible globally, and therefore, the second call to the 'suspectThree' variable
only returns the value from the initial, global variable.
*/

// Episode 5

// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Kitchen',
//     weapon: 'Candle Stick'
//   };
  
//   const changeWeapon = function(newWeapon) {
//     scenario.weapon = newWeapon;
//   }
  
//   const declareWeapon = function() {
//     return `The weapon is the ${scenario.weapon}.`;
//   }
  
//   changeWeapon('Revolver');
//   const verdict = declareWeapon();
//   console.log(verdict);

/* Prediction - "The weapon is the Revolver. "
In this case, the key-values of a constant object can be changed, so the function 
'changeWeapon' successfully changes the value for the key 'weapon'.
*/

// Episode 6 

// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }

//   plotTwist();
// }

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

/* Prediction - "The murderer is Mrs.White."
Within the 'changeMurderer' and 'plotTwist' functions, the variable murderer is assigned
without a variable type declaration, therefore it is globally accessible
*/

// Episode 7 

// let murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';

//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }

//     unexpectedOutcome();
//   }

//   plotTwist();
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

/* Prediction = "The murderer is Mr Green"
The initial 'let murderer' is overwritten by the declaration within 'changeMurderer', which 
has no variable type declaration. The next murderer declaration within 'plotTwist' would over-
write this, but as it is a 'let' type declaration, it's not accessable outside of it's function
or it's nested function.  
*/

// Episode 8

// const scenario = {
//     murderer: 'Mrs. Peacock',
//     room: 'Conservatory',
//     weapon: 'Lead Pipe'
//   };
  
// const changeScenario = function() {
//     scenario.murderer = 'Mrs. Peacock';
//     scenario.room = 'Dining Room';
  
//     const plotTwist = function(room) {
//       if (scenario.room === room) {
//         scenario.murderer = 'Colonel Mustard';
//       }
  
//       const unexpectedOutcome = function(murderer) {
//         if (scenario.murderer === murderer) {
//           scenario.weapon = 'Candle Stick';
//         }
//       }
  
//       unexpectedOutcome('Colonel Mustard');
//     }
  
//     plotTwist('Dining Room');
// }
  
//   const declareWeapon = function() {
//     return `The weapon is ${scenario.weapon}.`
//   }
  
//   changeScenario();
//   const verdict = declareWeapon();
//   console.log(verdict);

/* Prediction - "The weapon is Candle Stick."
In 'changeScenario' the room value is changed to the string 'Dining Room', which is 
also the string passed as an argument to the nested 'plotTwist' function. This function 
checks the argument against the room change in 'changeScenario'. We then change the murderer 
value to the string 'Colonel Mustard', which is also the string passed as an argument to the 
'unexpectedOutcome' function. This function checks the argument is the same as the value held
in the murderer key of the scenario object and then changes the weapon to "Candle Stick".
*/

// Epsiode 9 

let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

/* Prediction - "The murderer is Professor Plum"
The if statement sets murderer to 'Mrs Peacock', but only within the if statement block.
*/


