const http = require('http');

const server = http.createServer((req, res)=>{
    console.log("Akhlaque");
});

server.listen(4000);