// FizzBuzz challenge using Javascript
//     for(let i=1; i<=100; i++) {
//         if(i % 15 == 0) {
//             console.log("FizzBuzz");
//         } else if(i % 3 == 0) {
//             console.log("Fizz");
//         } else if(i % 5 == 0) {
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         }
//
//     }

// Write a string reversal function
    function reverseString(str) {
        let splitStr = str.split("");
        let reverseArr = splitStr.reverse();
        let joinArr = reverseArr.join("");
        return joinArr;
    }

    console.log(reverseString("Hello World"));

// Write a function that console logs 0 to 35 when called
    function countToThirtyFive() {
        for(let i = 0; i <= 35; i++) {
            console.log(i);
        }
    }

    countToThirtyFive();


// Write a function that takes in a parameter and counts from 0 up to that parameter
    function countTo(param) {
        for(let i = 0; i <= param; i++) {
            console.log(i);
        }
    }

    countTo(69);

