const fs = require('fs');
const path = require('path');

//create folder local
fs.mkdir(path.join(__dirname, '/test'), {}, function(err) {
    if(err) throw err; //check for error and throw error message in console
    console.log('Folder created successfully');
});

//to create and write to the same file.
fs.writeFile(
    path.join(__dirname, '/test', 'hello.txt'), ' beans', err => {
        if (err) throw err;
        console.log('File created and written to successfully')
    }
);


//to read a file. assuming the ile has contents in it
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'beans', (err, data) => {
        if (err) throw err;
        console.log(data)
    }
);

//to rename files
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'different.txt'), (err) => {
    if (err) throw err;
    console.log('file renamed')
}
);