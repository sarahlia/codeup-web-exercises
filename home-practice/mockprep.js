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

    reverseString("Hello World");
