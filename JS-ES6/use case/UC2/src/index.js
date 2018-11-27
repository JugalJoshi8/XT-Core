'use strict';

const getUser = _ => {
    let mockUser = { name: 'Sapient', password: 'Sapient' };
    //let mockUser = { name: 'Sapient1', password: 'Sapient' };
    //let mockUser = null;
    return new Promise((resolve, reject) => {
        if (mockUser) {
            resolve(mockUser);
        }
        else {
            reject({ err: 'Something went wrong' });
        }
    })
};

const login = (user) => {
    return new Promise((resolve, reject) => {
        if (user.name === 'Sapient' && user.password === 'Sapient') {
            resolve(user);
        }
        else {
            reject({ err: 'Wrong credentials' });
        }
    })
}

const dashboard = (user) => console.log('Welcome', user.name);

getUser().then(res => login(res))
    .then(user => dashboard(user))
    .catch(err => console.log(err))
    .finally(_ => console.log('done'));
