const http = require('http');
const path = require('path');
const fs = require('fs');

//look into process.env for port first is because the host might decide to run the port from there (enviromental variable)
const PORT1 =  process.env.PORT ||5000; 
const PORT2 = process.env.PORT || 4000; 

//IMPORTANT NOTE
//modifying the json file to change scripts to the code below allows nodemon to constantly monitor the main.js file
//and update the local port website when page is refreshed to avoid ctrl,c to kill and restart to update webpage:
// "scripts": {
//     "start": "node index",
//     "dev": "nodemon index"
//   },

//create a server object
const server1 = http.createServer((request, response) => {
    //console.log(request.url); //check which URL we're running
    if(request.url === '/'){ //if true then we're in the index page 
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
        if(err) throw err;
        response.writeHead(200, { 'Content_type': 'text/html' }); //write to the header
        response.end(data); //this will place HOME at the top of the webpage
        });
    }

//NOTE; this way of doing this is ineffecient and could be done easier with express
    if(request.url === '/about'){ //if true then we're in the about page 
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, data) => { //load about.html
        if(err) throw err;
        response.writeHead(200, { 'Content_type': 'text/html' }); 
        response.end(data); 
        });
    }


    if(request.url === '/api/users'){ //if we're serving a fetch api
        const users = [
            {name: 'Jimmy', game: 'dcs'},
            {name: 'Carl', game: 'valorant'}
    ];
    response.writeHead(200, { 'Content_type': 'application/json' }); //since this is json content we change the second argument 
    response.end(JSON.stringify(users));
    }

});
server1.listen(PORT1, () => console.log(`server is up on port ${PORT1}`));




//effecient workaround??
const server2 = http.createServer((request, response) => {
    //this makes our build more dynamic, as it checks only if the / is taking us to index and otherswise it loads whichever 
    //extension is requested in the url.
    let File_Path = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url); 

    let extension_name = path.extname(File_Path); //to get the extension of the file
    let Content_Type = 'text/html'; //init type of text

    //to check extention type AND current content type accordingly we use switch fot cases
    switch(extension_name){
        case '.js':
            Content_Type = 'text/javascript';
            break;

        case '.css':
            Content_Type = 'text/css';
            break;

    
        case '.png':
            Content_Type = 'text/png';
            break;
    
        case '.jpg':
            Content_Type = 'text/jpg';
            break;

        case '.json':
            Content_Type = 'application/json';
            break;
    }

    fs.readFile(File_Path, (err, data) =>{
        if(err){
            if(err.code == 'ENONET'){ //this checks for the error when the page is not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, data) => {
                    response.writeHead(200, { 'Content_type': 'text/html' });
                    response.end(data, 'utf8');
                }); //handle error and display error page
            } 
            else{
                response.writeHead(500); //this handles a server error
                response.end(`Server-error: ${err.code}`);
            }
        }
        else{ //this handles success
            response.writeHead(200, { 'Content_type': 'text/html' });
            response.end(data, 'utf8');
        }
    });
});
server2.listen(PORT2, () => console.log(`server is up on port ${PORT2}`));





//TEST CODE

const Logger = require('./logger'); //we're pulling the logger class we exported from logger.js

const logger = new Logger();

logger.on('message', (data) => console.log('listner called', data)); //ths should print our message string and also a random ID from uuid

logger.log('beans');


const Person = require('./person');

const person1 = new Person('John Doe',30);

person1.greeting();
