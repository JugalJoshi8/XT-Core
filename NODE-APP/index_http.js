const http = require('http');

const application = function(req, res) {
    res.write('Welcome to node application');
    //req.pipe(res);
    res.end();
}
const server = http.createServer(application);

server.on('request', () => {
    console.log('request received');
})

server.listen(8001, _ => {
    console.log('server is ready');
});