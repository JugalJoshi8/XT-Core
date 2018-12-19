const http = require('http');
const fs = require('fs');
var url = require('url');
let counter = 0;
const app = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    if (request.method === 'GET') {
        fs.createReadStream('./form_file.html').pipe(response);
    }
    else {
        counter++;
        var filename = 'file' + counter + '_' +  new Date().toDateString() + new Date().getTime();
        let progress = 0;
        const totalLength = request.headers['content-length'];
        console.log('total length', totalLength);

        const writeStream = fs.createWriteStream('./assets/' + filename + '.pdf');
        request.on('data', function (chunk) {
            writeStream.write(chunk);
            progress += chunk.length;
            console.log('chunk length', chunk.length);
            response.write(`<div>Uploaded: ${parseInt((progress / totalLength) * 100)}%</div>`);
            console.log(parseInt((progress / totalLength) * 100));
      });
  
      request.on('end', _ => {
          response.end();
          console.log('there are no more events to be processed');
      })
      
      writeStream.on('close', _ => {
          console.log('File has been closed');
      })
    }
}

const server = http.createServer(app);

server.on('request', () => {
    console.log('request received');
})

server.listen(8081, _ => {
    console.log('server is ready');
});

