// An Http Server is responsible for managing Http requests from a browser.
// Import http object
const http = require("node:http");

// Create an HTTP tunneling server
const server = http.createServer(
  // Callback Arrow function (similar to anonymous functions)
  (req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    // check the url
    if (req.url === "/") {
      res.end("<h1>Home Page</h1><p>Welcome to our website!</p>");
    } else if (req.url === "/about") {
      res.end("<h1>About Page</h1><p>This site was built with Node.js</p>");
    } else {
      res.end("<h1>Page Not Found!</h1>");
    }
  },
);

// start a simple http server locally on port 3000
server.listen(3000, () => {
  console.log("Listening on 127.0.0.1:3000");
});
