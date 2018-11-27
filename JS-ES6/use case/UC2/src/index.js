'use strict';

/**
 * 
 * function can be passed as parameters,
 *  can be stored ina  variable, that variable points 
 * function that can be executed later. 
 */
function greeter(greet) {
    greet('Jugal');
}

const hi = function (name) {
    console.log('hi', name);
}

greeter(hi);

greeter(function (name) {
    console.log('hello', name);
});

///////////

const myGreeter = greet => greet('Jugal');
const hi1 = name => console.log('Hi', name);
myGreeter(hi1);
myGreeter(name => console.log('Hello', name));
//////////////////////

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