(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    var names = ["Joanne", "Michael", "Sarah", "Laura"];
    console.log(names);
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log("Number of elements in the names array: " + names.length);



    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log("Name for index 0 is " + names[0]);
    console.log("Name for index 1 is " + names[1]);
    console.log("Name for index 2 is " + names[2]);
    console.log("Name for index 3 is " + names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for(var x = 0; x < names.length; x++ ) {
        console.log("Using for-loop. Name for index " + x + " is: " + names[x]);
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(function(element, index, array) {
        console.log("Using forEach. Name for index " + index + " is: " + element);
    });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    function first(arr) {
        return arr[0];
    }

    var numbers = [1, 2, 3, 4, 5];
    var result = first(numbers);
    console.log('first test: ' , result === 1);

    console.log(first([1, 2, 3, 4, 5]));
    console.log(first(["purple", 3, 2.5]));

    function second(arr) {
        return arr[1];
    }

    result = second(numbers);
    console.log('second test: ' , result === 2);

    console.log(second([1, 2, 3, 4, 5]));
    console.log(second(["purple", 3, 2.5]));

    function last(arr) {
        return arr[arr.length - 1];
    }

    result = last(numbers);
    console.log('last test: ' , result === 5);

    console.log(last([1, 2, 3, 4, 5]));
    console.log(last(["purple", 3, 2.5]));
})();
