async function getUser() {
    return Promise.resolve({
        id: 2,
        name: 'jj'
    })
}

getUser().then(res => console.log(res));

// async function returns promise
async function getValue() {
    return 10;
}

getValue().then(res =>console.log(res));


async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(_ => resolve('done!'), 1000);
    });
    let result  = await promise; // wait till the promise resolves
    console.log(result);
}

f();

async function getUsers(url) {
    let response = await fetch(url);
    let body = await response.json();
    return body;
}

getUsers('https://jsonplaceholder.typicode.com/users').then(res => console.log(res));

////
class Waiter {
    async wait() {
        return await Promise.resolve(123213);
    }
}

new Waiter()
    .wait()
    .then(res => console.log(res));

    async function errorHandler() {
        try {
            let result1 = await Promise.resolve('hey-1');
            console.log(result1);
            let response = await fetch('http://no-such-url');
        }
        catch(err) {
            console.log('error', err);
        }
        finally {
            console.log('code completed');
        }
    }

    errorHandler();
