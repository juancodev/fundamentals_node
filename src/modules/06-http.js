const {
  createServer
} = require('node:http');

createServer((request, response) => {
  console.log('new petition');
  console.log(request.url);

  response.writeHead(201, {
    'Content-Type': 'text/plain; charset=utf8'
  });
  response.write('<h1>Hello World</h1>');

  response.end();
}).listen(7000);

console.log('Listen http on the port 7000');