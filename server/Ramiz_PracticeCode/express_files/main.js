// here we will create a simple express server
const { Router, response } = require('express');
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const midware = require('./middleware/midware');

const server = express();
const PORT = process.env.PORT || 5000; //check enviromental port number first

//must do this to initilize middleware. Midware is in the middleware file and exported to here
server.use(Midware);

//handlebars middleware
server.engine('handlebars', exphbs({defaultLayout: 'main'}));
server.set('view engine', 'handlebars');


//this middleware will be used to parse though body data when using postman for user entries
server.use(express.json());
server.use(express.urlencoded({ extended: false})); //this is used to deal with url encoded data

//set a static folder
server.use(express.static(path.join(__dirname, 'public'))); //this is more effecient than using a route

server.use('/users', require('./routes/users')); // this is to be able to use the routes folder in our directory to get users info

server.listen(PORT, () => console.log(`Server is running....Port: ${PORT}`));





//TEST CODE

const server2 = express();
const PORT2 = process.env.PORT || 6000;
//an example array of people's information stored. copied to its own file in the directory, users.js
const users = [
    {id: 1, Name: 'billy', status: 'online'},
    {id: 2, Name: 'joe', status: 'offline'},
    {id: 3, Name: 'sam', status: 'online'}
]

//creating a route
server.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'public', 'index.html'));
    //response.send('test message');
}); 
