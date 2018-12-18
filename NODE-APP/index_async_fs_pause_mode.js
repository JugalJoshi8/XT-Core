const fs= require('fs');

const stream = fs.createReadStream('./big_file.txt', 'UTF-8');

stream.on('readable', _ => {
    let chunk;
    while(null !== (chunk = stream.read())) {
        console.log(`received ${chunk.length} bytes of data`);
    }
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