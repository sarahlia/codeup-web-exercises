"use strict";

var i = 1;

while(i <= 16) {
    console.log(Math.pow(2, i));
    i++;
}

// An ice cream seller can't go home until she sells all of her cones.
// Write a JS program that generates a random number between 50 and 100 representing the amount of cones to sell.
// Your code should generate numbers between 1 and 5, simulating the amount of cones being bought by her clients.
// Use a do-while loop to log to the console the amount of cones sold to each person.


var allCones = Math.floor(Math.random() * 50) + 50;
console.log("Number of cones for sale: " + allCones);

do {
    var conesToBuy = Math.floor(Math.random() * 5) + 1;

    if (conesToBuy <= allCones) {
        console.log(conesToBuy + " cones sold...");
        //allCones = allCones - conesToBuy
        allCones -= conesToBuy;
    } else {
        console.log("Cannot sell you " + conesToBuy + " cones, I only have " + allCones);
    }
    console.log(allCones);
} while (allCones > 0);
console.log("Yay! I sold them all!");

