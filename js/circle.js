(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            var area = Math.PI * (Math.pow(this.radius, 2));
            return area;
        },

        logInfo: function (doRounding) {
            var area = this.getArea();
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            if(doRounding === true) {
                area = Math.round(area);
            }
            console.log("Area of a circle with radius: " + this.radius + ", is: " + area);
        }
    };
    // console.log(circle.getArea());


    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5;

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();

