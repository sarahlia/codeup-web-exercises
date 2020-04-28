// let url = 'https://api.github.com/users/sarahlia/events/public';

function getDate(username) {
    let url = `https://api.github.com/users/${username}/events/public`;
    return fetch(url, {headers: {'Authorization': GITHUB_KEY}})
        .then( response => response.json()
            .then( data => data[0].created_at )
        )
}
getDate('sarahlia').then(lastCommit => console.log("last commit date: " + lastCommit));


// if we only want the PushEvent of the last commit date, do a for-of loop:
// function getDate(username) {
//     let url = `https://api.github.com/users/${username}/events/public`;
//     return fetch(url, {headers: {'Authorization': GITHUB_KEY}})
//         .then( response => response.json()
//             .then( listOfEvents => {
//                 for(let event of listOfEvents) {
//                     console.log(event);
//                     if(event.type === 'PushEvent') {
//                         return event.created_at;
//                     }
//                 }
//             })
//         )
// }
// getDate('sarahlia').then(lastCommit => console.log("last commit date: " + lastCommit));

function wait(num) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => resolve(num), num);
    });
}

wait(1000).then( (millisec) => console.log(`You'll see this after ${millisec/1000} second(s).`) );
wait(2000).then( (millisec) => console.log(`You'll see this after ${millisec/1000} second(s).`) );
wait(3000).catch( (millisec) => console.log(`Connection failed!`) );



