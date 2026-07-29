// What are modules in Node?
// Modules are like libraries in node. They are reusable blocks of code.
// There are built in node modules and third party ones on the web.

// Any file in a node environment is considered a module. Which gives us the ability to import and export code between files.

// console.log(module);

// var, const are used to define variables in node modules.

// An Http Server is responsible for managing Http requests from a browser.
// Import http object
const http = require("node:http");

// What are some built in modules in Node?
// 1. http: used to create web servers
// 2. fs: allows file manipulation on a server.
// 3. path: use to work with file paths.
const path = require("node:path");
console.log(path.parse(__filename));
// Third Party modules
// 4. os: get information about the operating system.
const osPaths = require("os-paths/cjs");
const home = osPaths.home();
const temp = osPaths.temp();
console.log(home);
console.log(temp);

// import logger module
var loggerFunction = require("./logger");
// ./ : current directory
// ../ : parent directory
// / : root directory of filesystem
// events in node js
const EventEmitter = require("node:events");

var myEmitter = new EventEmitter();

// define the custom event to listen for.
myEmitter.on("fire", () => {
  loggerFunction("The application is on fire!");
});

var menu = [
  { id: 1, name: "Turkish Coffee", price: 3 },
  { id: 2, name: "Americano", price: 4 },
  { id: 3, name: "Iced Latte", price: 5 },
];

// What is express?
// Express is used to create a web server in node. Express works on a middleware concept.
var express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.get("/api/menu", (req, res) => {
  res.send(menu);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

// Create an HTTP tunneling server
// const server = http.createServer(
//   // Callback Arrow function (similar to anonymous functions)
//   (req, res) => {
//     // check the url
//     if (req.url === "/api/menu") {
//       // log a visit
//       loggerFunction("Request for menu has come in!");
//       res.writeHead(200, { "Content-Type": "application/json" });
//       // JSON.stringify converts arrays and objects to json data format
//       res.end(JSON.stringify(menu));
//     } else {
//       // emit "fire" event
//       myEmitter.emit("fire");
//       res.writeHead(200, { "Content-Type": "text/plain" });
//       res.end("<h1>Page Not Found!</h1>");
//     }
//   },
// );

// start a simple http server locally on port 3000
// server.listen(3000, () => {
//   console.log("Listening on 127.0.0.1:3000");
// });

// Semantic Versioning
// Majot.Minor.Patch
// Caret(^): ^1.2.2 means install the latest version of 1.x.x
// Tilda(~): ~1.2.2 means install the latest version of 1.2.x

// How can we upate our packages?
// npm outdated
// npm update
// npm install <package>@1.2.2
// npm install <package>@latest
