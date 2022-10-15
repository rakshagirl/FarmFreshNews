const http = require('http');
const { Connection } = require('pg');

const hostname = '127.0.0.1';
const port = 6000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
//   c = new Connection();

  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
