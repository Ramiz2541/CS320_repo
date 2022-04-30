const url = require('url');

const myUrl = new URL('http://ExampleWebsite.com/hello.html?id=100&status=active'); //test URL, not an actual website 

//how to get serialized URL
console.log(myUrl.href);
//or
console.log(myUrl.toString());


//to get the host or the root domain 
console.log(myUrl.host);
//and to get the name of the host, which won't include the port
console.log(myUrl.hostname);

//to get serialized query 
console.log(myUrl.search);

//to get an object from the serialized query
console.log(myUrl.searchParams);

//to add parameters to the URL dynamically
myUrl.searchParams.append('blah', '8712');

//if we want to loop through the parameters
myUrl.searchParams.forEach((v1, n1) => console.log(`${v1}; ${n1}`));

