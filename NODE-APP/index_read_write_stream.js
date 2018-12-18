const fs = require('fs');
const readStream = fs.createReadStream('./big_file.txt', 'UTF-8');
const writeStream = fs.createWriteStream('./big_file_copy.txt');

// readStream.on('data', chunk => {
//     var buffer_good = writeStream.write(chunk);
//     if(!buffer_good) {
//         readStream.pause();
//     }
// });

// writeStream.on('drain', _ => {
//     console.log('buffer drained');
//     readStream.resume();
// });

// readStream.on('end', _ => {
//     console.log('there are no more events to be processed');
// })

// readStream.on('close', _ => {
//     console.log('File has been closed');
// })

readStream.pipe(writeStream);
