'use strict';

const getUser = _ => {
    let mockUser = { name: 'Sapient', password: 'Sapient' };
    //let mockUser = { name: 'Sapient1', password: 'Sapient' };
    //let mockUser = null;
    return new Promise((resolve, reject) => {
        if (mockUser) {
            setTimeout(_ => resolve(mockUser), 1000);
        }
        else {
            setTimeout(_ => reject({ err: 'Something went wrong' }), 1000);
        }
    })
};

const login = (user) => {
    return new Promise((resolve, reject) => {
        if (user.name === 'Sapient' && user.password === 'Sapient') {
            setTimeout(_ => resolve(user), 1000);
        }
        else {
            setTimeout(_ => reject({ err: 'Wrong credentials' }), 1000);
        }
    })
}

const dashboard = (user) => console.log('Welcome', user.name);

getUser().then(res => login(res))
    .then(user => dashboard(user))
    .catch(err => console.log(err))
    .finally(_ => console.log('done'));
