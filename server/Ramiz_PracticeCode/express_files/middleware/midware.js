const moment = require('moment'); //used to time/date

//here we create middleware
const Midware = (request, response, next) => {
    console.log('user1'); //this logs beans into midware
    //this gives us the http, the host, and the page url as well as the date formatted
    console.log(`${request.protocol}://${request.get('theHost')}${request.originalUrl}: ${moment().format()}`); 
    next();
}

modules.export = Midware;