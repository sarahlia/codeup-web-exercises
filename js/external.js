console.log("Hello from external JavaScript");

var name = "Sarah";
console.log(name);

alert("Welcome to my Website!");

var input = prompt("What is your favorite color?");
console.log("Great, " + input +" is my favorite color too!");


// Exercise 3 #1
var LittleMermaid = 3;
var BrotherBear = 5;
var Hercules = 1;

alert("Answer to Exercise 3 #1: " + 3 * (LittleMermaid + BrotherBear + Hercules));

// Exercise 3 #2
var Google = 400;
var Amazon = 380;
var Facebook = 350;

alert("Answer to Exercise 3 #2: " + ((10 * Facebook) + (6 * Google) + (4 * Amazon)));

// Exercise 3 #3
var classNotFull = true;
var noScheduleConflict = true;
var canBeEnrolled = classNotFull && noScheduleConflict;

console.log(classNotFull && !noScheduleConflict);

console.log(canBeEnrolled);

// Exercise 3 #4
var ItemsBought = 2;
var OfferNotExpired = true;
var isPremiumMember = true;
var isOfferValid = (isPremiumMember && OfferNotExpired) || (ItemsBought >= 2 && OfferNotExpired);

console.log(!isPremiumMember && OfferNotExpired);
console.log(isOfferValid);

