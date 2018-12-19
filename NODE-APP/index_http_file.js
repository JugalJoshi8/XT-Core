const http = require('http');
const fs = require('fs');

const app = (req, res) => {
    const stream = fs.createReadStream('./big_file.txt');
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    stream.pipe(res);
}

const server = http.createServer(app);

server.on('request', () => {
    console.log('request received');
})

server.listen(8081, _ => {
    console.log('server is ready');
});