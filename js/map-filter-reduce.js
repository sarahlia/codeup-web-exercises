const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//Exercise 2: use .filter to create an array of user object where each has at least 3 languages
let proficient = users.filter( person => person.languages.length >= 3 );
console.log(proficient);

//Exercise 3: use .map to create an array of strings where each element is a user's email address
let userEmails = users.map( person => person.email);
console.log(userEmails);
console.log(userEmails.length);


//Exercise 4a: use .reduce to get the total years of experience from the list of users
let totalYearsExp = users.reduce( (total, person) => {
    return total + person.yearsOfExperience;
}, 0);
console.log(totalYearsExp);

//Exercise 4b: calculate the average years of experience:
let averageYearsExp = totalYearsExp/(users.length);
console.log(averageYearsExp);

//Exercise 5: use .reduce to get the longest email from the list of users
let longestEmail = userEmails.reduce ( (acc, unit) => {
    return  acc.length > unit.length ? acc : unit;
    // if (acc.length > unit.length) {
    //     return acc;
    // } else {
    //     return unit;
    // }
    // return Math.max(unit.length);
}, "");
console.log(longestEmail);

//Exercise 6: use .reduce to get the list of user's names in a single string:
let userNames = users.map( person => person.name ) ;
console.log(userNames);

let namesString = userNames.reduce ( (acc, unit) => {
    return acc + unit;
}, "");
console.log(namesString);


