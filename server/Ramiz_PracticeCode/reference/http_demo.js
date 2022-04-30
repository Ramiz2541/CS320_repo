const http = require('http');

//create a server object. this will be extremely useful save for later 
http.createServer((request, response) => {
    //to write response 
    response.write ('whats cookin good lookin');
    response.end();
}).listen(5000, () => console.log('Server running.')); //specift port 5000