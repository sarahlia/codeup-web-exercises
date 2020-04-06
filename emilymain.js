"use strict";

//renders coffee cards and puts them on the page as html
function renderCoffee(coffee) {
    var html = '<div class="card border-white align-items-center">';
    // html += '<div class="card-title justify-content-center">' + '</div>';
    html += '<h6>' + coffee.name + '</h6>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

// function renderRoast(coffee) {
//     var html = '<div class="card border-white text-dark align-items-center">';
//     // html += '<p>' + coffee.name + '</p>';
//     html += '<p>' + coffee.roast + '</p>';
//     html += '</div>';
//
//     return html;
// }

//renders coffee cards by coffee id# in ascending  order, displays it below the id "coffees"
function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

//dropdown Roast selection
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if ((coffee.roast === selectedRoast) || (selectedRoast === "all")) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

//converts keyed-in coffee names to lowercase, matches them to id "coffee-name"
function keyCoffee() {
    var html = '';
    for (var i = 0; i < coffees.length; i++ ) {
        if (coffees[i].name.toLowerCase().includes(document.getElementById("coffee-name").value.toLowerCase())) {
            console.log(coffees.name);
            html += renderCoffee(coffees[i]);
        }
        tbody.innerHTML = html;
    }
}
//adds DOM event when keying in coffee name
document.getElementById("coffee-name").addEventListener("keyup", keyCoffee);

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#first-submit');
var roastSelection = document.querySelector('#roast-selection-top');

tbody.innerHTML = renderCoffees(coffees);

//adds DOM event when clicking on the submit button
submitButton.addEventListener('submit', updateCoffees);

