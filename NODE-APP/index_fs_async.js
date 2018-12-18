const fs = require('fs');

//non blocking(async), non streaming file read
const options = {
    encoding: 'UTF-8'
};
fs.readFile('./veg_menu.txt', options, (err, data) => {
    if(err) {
        throw err;
    }
    console.log(data);
});
console.log('end');

//non blocking(async), non streaming file write

const data = 'aaloo parantha';
fs.writeFile('./north_indian_menu.txt', data, (err) => {
    if(err) {
        throw err;
    }
    console.log('data written successfullt');
})
