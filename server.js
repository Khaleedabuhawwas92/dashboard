var StaticServer = require("static-server");
var server = new StaticServer({
   rootPath: "./dist/", // required, the root of the server file tree
   port: 8080 // required, the port to listen
});

server.start(function() {
   console.log("khalid  Server listening to", server.port);
});