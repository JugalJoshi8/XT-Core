const fs = require('fs');
console.log('start');;

// sync read file
try {
    const vegMenu = fs.readFileSync('./veg_menu.txt', 'UTF-8');
    console.log(vegMenu);
}
catch(err) {
    console.log('something went wrong reading file');
}

//sync write file

try {
    const data = 'Fish1';
    fs.writeFileSync('./nonveg_menu.txt', data, 'UTF-8');
    console.log('data successfullt written') 
}
catch(err) {
    console.log('something went wrong writing file')
}
console.log('end');
