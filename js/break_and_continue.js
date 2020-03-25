// branch: javascript-loops


"use strict";

// var input = prompt("Enter an odd number between 1 and 50.");
// console.log("Number to skip: " + parseInt(input));
//
//     for(var n = 1; n <= 50; n+=2) {
//         if (parseInt(input) % 2 === 0) {
//             alert("Refresh the page and enter a valid number.");
//             break;
//
//         } else if (n === parseInt(input)) {
//             console.log("Yikes! Skipping number: " + n);
//             continue;
//         }
//         console.log("Here is an odd number: " + n);
//     }


var numberInp = 0;
do {
     numberInp = prompt("Enter an odd number between 1 and 50.");
    if (numberInp < 1|| numberInp > 50) {
        alert(numberInp + " is not between 1 and 50. Please enter a valid number.");
    } else if (numberInp % 2 === 0) {
        alert(numberInp + " is not odd. Please enter a valid number.");
    } else if (isNaN(numberInp)) {
        alert(numberInp + " is not a number. Please enter a valid number.")
    } else {
        alert("Thanks. You entered a valid number.");
        break;
    }
} while (true);


console.log('Number to skip is: ' + numberInp);

for(var i = 1; i <= 50; i+=2) {
    if (i === parseInt(numberInp)) {
        console.log("Yikes! Skipping number: " + i);
        continue;
    }
    console.log("Here is an odd number: " + i);
}


