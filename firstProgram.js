//DISPLAY HELLO WORLD ON WEB BROWSER 

//require function  ---- reads a JavaScript file, executes the file, and 
//then proceeds to return an object. Using this object, one can then use the various 
//functionalities available in the module called by the require function. So in our case, 
//since we want to use the functionality of http and we are using the 
//require(http) command.

var http = require('http');


//In this 2nd line of code, we are creating a server application which is based 
//on a simple function. This function is called, whenever a request is made to 
//our server application.




http.createServer(function (req, res) 
{
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end('hello to the outerspace!');			// when request is received, we ask 
														//for Hello World

}).listen(8080);			// make our server application listen to client requests
							// on port no 8080 (specify any available port over here 
							// what is a port? 



// INSTALLED EXPRESS using npm install express in terminal
// use "require" from now on to use a module in a Node  app 

