"use strict";

// Exercise 2
for(var i = 1; i <= 10; i++) {
    function showMultiplicationTable(numb) {
        return numb * i;
    }
    console.log("7 X " + i + " = " + showMultiplicationTable(7));
}

// Exercise 3

// console.log(randomNumber);

for(var i = 1; i <= 10; i++) {
    var randomNumber = Math.floor(Math.random() * 200) + 20;
    if (randomNumber % 2 === 0) {
        console.log(randomNumber+ " is even");
    } else {
        console.log(randomNumber + " is odd.");
    }
}

// Exercise 4
for(var i = 1; i <= 9; i++) {
    console.log(i.toString().repeat(i));
    // if (i === 2) {
    //     console.log("2".repeat(i));
    // } else if (i === 3) {
    //     console.log(i + "33");
    // } else if (i === 4) {
    //     console.log(i + "444");
    // } else if (i === 5) {
    //     console.log(i + "5555");
    // } else if (i === 6) {
    //     console.log(i + "66666");
    // } else if (i === 7) {
    //     console.log(i + "777777");
    // } else if (i === 8) {
    //     console.log(i + "8888888");
    // } else if (i === 9) {
    //     console.log(i + "99999999");
    // } else {
    //     console.log("1");
    // }
}

// Exercise 5
for(var i = 100; i >= 5; i-=5) {
    console.log(i);
}
