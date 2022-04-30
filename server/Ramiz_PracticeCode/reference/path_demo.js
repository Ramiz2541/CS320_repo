const path = require('path');

//base file name
console.log(__filename);

//Directory name
console.log(path.dirname(__filename));

//File extension
console.log(path.extname(__filename));

//to create path object
console.log(path.parse(__filename));

//to concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));