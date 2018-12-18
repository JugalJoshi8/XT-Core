const fs = require('fs');

const stream = fs.createReadStream('./big_file.txt');

stream.on('data', chunk => {
    console.log(`received ${chunk.length} bytes of data`);
    stream.pause();
    console.log('Pausing stream for 1 second');
    setTimeout(_ => {
        console.log('Resuming stream');
        stream.resume();
    }, 1000);
 })

 stream.on('error', err => {
    console.log('Something went wrong');
})

stream.on('end', _ => {
    console.log('there are no more events to be processed');
})

stream.on('close', _ => {
    console.log('File has been closed');
})