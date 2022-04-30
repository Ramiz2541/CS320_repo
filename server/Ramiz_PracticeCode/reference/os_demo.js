const os = require('os');

//to get platform type
console.log(os.platform());

//CPU arch
console.log(os.arch());

//CPU core Information 
console.log(os.cpus());

//how much free memory
console.log(os.freemem());

//how much memory in total
console.log(os.totalmem());

//the home directory
console.log(os.homedir());
