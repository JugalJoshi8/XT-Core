'use strict';

/**
 * login must be called once the user daya is available
 * 
 */
const getUser = (resolve, reject) =>  {
    let mockUser = {name: 'Sapient', password: 'Sapient'};
    //let mockUser = {name: 'Jugal', password: 'asdf'};
    //let mockUser = null;
    if(mockUser) {
        resolve(mockUser);
    }
    else {
        reject({err: 'Something went wrong'});
    }
}

const login = (user, resolve, reject) => {
    if(user.name === 'Sapient' && user.password === 'Sapient') {
        resolve(user);
    }
    else {
        reject({err: 'wromg credentials'});
    }
}

const dashboard = user => console.log('Welcome', user.name);

getUser(user => login(user, user => dashboard(user), err => console.log(err)), err => console.log(err));