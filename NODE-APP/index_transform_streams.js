const zlib = require('zlib');
const fs = require('fs');
const gzip = zlib.createGzip();
const inp = fs.createReadStream('./big_file.txt');
const out = fs.createWriteStream('./big_file.gz');

inp.pipe(gzip).pipe(out);