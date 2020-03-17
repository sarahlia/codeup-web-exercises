console.log("Hello from external JavaScript");

// var name = "Sarah";
// console.log(name);

alert("Welcome to my Website!");

var input = prompt("What is your favorite color?");
alert("Great, " + input +" is my favorite color too!");


// Exercise 3 #1
var LittleMermaid = prompt("how many days do you want to rent The Little Mermaid?");
var BrotherBear = prompt("how many days do you want to rent Brother Bear?");
var Hercules = prompt("how many days do you want to rent Hercules?");

var TotalCost = (parseInt(LittleMermaid) + parseInt(BrotherBear) + parseInt(Hercules)) * 3;
alert("Answer to Exercise 3 #1: Total Cost = $" + TotalCost);

// Exercise 3 #2
var Google = 400, Amazon = 380, Facebook = 350;

var TotalPay = ((10 * Facebook) + (6 * Google) + (4 * Amazon));

alert("Answer to Exercise 3 #2: Total Pay = $" + TotalPay);

// Exercise 3 #3
var classNotFull = true;
var noScheduleConflict = true;
var canBeEnrolled = classNotFull && noScheduleConflict;

// console.log(classNotFull && !noScheduleConflict);

console.log(canBeEnrolled);
alert("Student can attend class " + canBeEnrolled);


// Exercise 3 #4
var ItemsBought = 2;
var OfferNotExpired = true;
var isPremiumMember = true;
var isOfferValid = (isPremiumMember && OfferNotExpired) || (ItemsBought >= 2 && OfferNotExpired);

console.log(!isPremiumMember && OfferNotExpired);
console.log(isOfferValid);

