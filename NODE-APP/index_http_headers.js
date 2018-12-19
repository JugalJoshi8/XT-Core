const http = require('http');

const customers = [{
    name: 'a',
    id: 1
},
{
    name: 'b',
    id: 2
},
{
    name: 'c',
    id: 3
}
];

const app = (req, res) => {
    const payload = JSON.stringify(customers);
    res.writeHead(200, {
        'Content-type': 'application/json'
    });
    res.write(payload);
    res.end();
}

const server = http.createServer(app).listen(8001);
server.on('request', _ => {
    console.log('request received');
})