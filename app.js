// An Http Server is responsible for managing Http requests from a browser.
// Import http object
const http = require("node:http");

// Create an HTTP tunneling server
const server = http.createServer(
  // Callback Arrow function (similar to anonymous functions)
  (req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World!");
  },
);

// start a simple http server locally on port 3000
server.listen(3000, () => {
  console.log("Listening on 127.0.0.1:3000");
});
