const express = require('express');
const router = express.Router();
const users = require('../users');
const uuid = require('uuid');


//this returns the users array and their attributes. Postman was used to verify results
router.get('/', (request, response) => {
    response.json(users);
})

//if we want to get a single user
router.get('/:id', (request, response) => {
    //response.send(request.params.id);
    const Exist_check = users.some(user => user.id === parseInt(req.params.int)); //this will give us a tru or false result

    if(Exist_check){
        response.json(users.filter(user => user.id === parseInt(request.params.id))); //functional programming yay. we use parse int because ID is a number
    }
    else{
        response.status(400).json({ msg: 'User not in array'});
    }
});


//to create a user. 
router.post('/', (request, response) => {
    const New_User = {
        id: uuic.v4(), Name: request.body.Name, status: 'active'};

    if(!New_User.Name || !New_User.status){ //this is to make sure we have valid input for the new user
        return response.status(400).json({msg: 'Invalid input, please include a valid name and Email'});
    }
    
    users.push(New_User); //push on the new user
    response.json(users); //return the new user array with the newly added element

});



//to update a pre-existing member. we will do the same check whether the user exists or not as before 
router.get('/:id', (request, response) => {
    //response.send(request.params.id);
    const Exist_check = users.some(user => user.id === parseInt(req.params.int)); 

    if(Exist_check){ //if user we want to update exists, we move forward
        const updated_user = request.body;
        users.foreach(user => {
            if(user.id === parseInt(request.params.id)){ 
                user.Name = updated_user.Name ? updated_user.Name : user.Name; //this is to check whether they're updating only name or status or both
                user.status = updated_user.status ? updated_user.status : user.status; 

                response.json({ msg: 'user found and updated', user });
            }
        });
    }
    else{ //if user does not exist
        response.status(400).json({ msg: 'User not in array'});
    }
});



//to delete a user in the array 
router.get('/:id', (request, response) => {
    //response.send(request.params.id);
    const Exist_check = users.some(user => user.id === parseInt(req.params.int)); //this will give us a tru or false result

    if(Exist_check){
        response.json({ msg: 'user deleted', users: users.filter(user => user.id !== parseInt(request.params.id))}); //note the !== instead of ===
    }
    else{
        response.status(400).json({ msg: 'User not in array'});
    }
});

modules.exports = router;
