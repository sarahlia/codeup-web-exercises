// let url = 'https://api.github.com/users/sarahlia/events/public';

        function getDate(username) {
            let url = `https://api.github.com/users/${username}/events/public`;
            return fetch(url, {headers: {'Authorization': GITHUB_KEY}})
                .then( response => response.json()
                    .then( data => data[0].created_at )
                )
                    // let lastCommit = data[0].created_at
                    // console.log(lastCommit);
                    // return lastCommit;
                //     })
                // ).catch( error => console.error(error) );
        }
        getDate('sarahlia').then(lastCommit => console.log("last commit date: " + lastCommit));

function wait(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof num === "number") {
                resolve(num);
            // } else {
            //     reject('Network Connection Error!');
            }
        }, num);
    });
}

const request = wait(2000);
console.log(request); // pending promise
request.then(num => console.log("You'll see this after " + num + " milliseconds."));
request.catch(error => console.log('Promise rejected!', error));