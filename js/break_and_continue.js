// branch: javascript-loops


"use strict";

// var aNumb =  Math.floor((Math.random()*50)+1);
// console.log("Number to skip is: " + aNumb);

var input = prompt("Enter an odd number between 1 and 50.");
console.log("Number to skip: " + parseInt(input));

    for(var i = 1; i <= 50; i+=2) {
        if (parseInt(input) % 2 === 0) {
            alert("Refresh the page and enter a valid number.");
            break;

                // if (parseInt(inp2) % 2 !== 0) {
                //     if (i === parseInt(inp2)) {
                //         console.log("Yikes! Skipping number: " + i);
                //     } else {
                //         console.log("Here is an odd number: " + i);
                //     }
                // }

        } else if (i === parseInt(input)) {
            console.log("Yikes! Skipping number: " + i);
            continue;
        }
        console.log("Here is an odd number: " + i);
    }
