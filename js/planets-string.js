(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    var planetsArray = planetsString.split('|');
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     */
    var breakString = planetsArray.join('<br>');
    console.log(breakString);

     /** BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    // var stringBreak = planetsArray.join('<br>');
    // console.log(stringBreak);
    //
    // var listString = planetsArray.join(' <li> ');
    // console.log(listString);
    //
    // var listArray = listString.split(' ');
    // console.log("listArray: " + listArray);
    //
    // listArray.unshift('<ul>');
    // console.log(listArray);
    //
    // listArray.push('</ul>');
    // console.log(listArray);
    //
    // var indexOfNeptune = listArray.indexOf('Neptune');
    // console.log(indexOfNeptune);
    //
    // listArray.splice(indexOfNeptune + 1, 0, '<li>');
    // console.log(listArray);
    //
    // var indexOfUl = listArray.indexOf('<ul>');
    // console.log(indexOfUl);
    //
    // listArray.splice(indexOfUl + 1, 0, '<li>');
    // console.log(listArray);
    //
    // var unorderedString = listArray.join('');
    // console.log(unorderedString);

// using join:
    var planetsUL = "<ul><li>";
    planetsUL += planetsArray.join("</li><li>");

    planetsUL += "</li></ul>";
    console.log(planetsUL);
    document.write(planetsUL);

    //using forEach:

    var planetsUL = "<ul>";

    planetsArray.forEach(function(planet) {
        planetsUL += "<li>" + planet + "</li>";
    });

    planetsUL += "</ul>";

    console.log('foreach solution', planetsUL);








})();
