const fs = require('fs');


const file = fs.createWriteStream('./big_file.txt');
for(let i = 0; i < 1000; i++) {
    file.write(`sgkjahsdjkashdjka kdashdkahsdjkasd kasjdhjkashdjkashd kasjhdjkashdjkashdjkashd aksjhdjkashdjkahs dkasjhdjkashdjksadasd
    asdhaskjdhakjsdas kajshdjkashdkjashd kjashdkjash dkjashdjkashdk jahskdjhasjkd askjdhka shdjkashdjkahsjkdhaksdhkasjdhasjk`);
}

const stream = fs.createReadStream('./big_file.txt', 'UTF-8');
let counter = 0;
stream.on('data', chunk => {
    counter++;
    console.log(`${counter} Received ${chunk.length} bytes of data`);
});

stream.on('error', err => {
    console.log('Something went wrong');
})

stream.on('end', _ => {
    console.log('there are no more events to be processed');
})

stream.on('close', _ => {
    console.log('File has been closed');
})