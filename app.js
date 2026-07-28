// An Http Server is responsible for managing Http requests from a browser.
// Import http object
const http = require("node:http");

var menu = [
  { id: 1, name: "Turkish Coffee", price: 3 },
  { id: 2, name: "Americano", price: 4 },
  { id: 3, name: "Iced Latte", price: 5 },
];

// Create an HTTP tunneling server
const server = http.createServer(
  // Callback Arrow function (similar to anonymous functions)
  (req, res) => {
    // check the url
    if (req.url === "/api/menu") {
      res.writeHead(200, { "Content-Type": "application/json" });
      // JSON.stringify converts arrays and objects to json data format
      res.end(JSON.stringify(menu));
    } else {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("<h1>Page Not Found!</h1>");
    }
  },
);

// start a simple http server locally on port 3000
server.listen(3000, () => {
  console.log("Listening on 127.0.0.1:3000");
});
