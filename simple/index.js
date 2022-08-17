const http = require('http');

const hostname = '0.0.0.0';
const port = 1000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World 2');
  // res.end(process.env.pg_password, 'Hello World' );
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});