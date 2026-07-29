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

// What is express?
// Express is used to create a web server in node. Express works on a middleware concept.
// A middleware is a function that has access to the request, response, and a next function.
// You can think of it as a layer that sits between the request and response to a browser.
function customMiddleware(req, res, next) {
  console.log("Middleware function called!");
  // next function is called to move onto the next middleware
  next();
}

var express = require("express");
var cors = require("cors");

const app = express();

// Adds headers: Access-Control-Allow-Origin: *
app.use(cors());
// use the middleware function when a request comes in from the web.
app.use(customMiddleware);
// parse x-www-form-urlencoded data to Javascript Object
app.use(express.urlencoded({ extended: true }));
// parse JSON to Javascript Object
app.use(express.json());

// What is a Restful API?
// Restful stands for Representational State Transfer
// API stands for Application Programming Interface
// A way to design you URL's for resource manipulation
// example: /pluralResourceName/  OR  /pluralResourceName/:id

// API's use HTTP method for interaction.
// GET - Get data
// POST - Send data
// PATCH - Update data
// PUT - Override data
// DELETE - Delete data

// Response contains an HTTP status code.
// These are codes for representing the type of response from our server.
// 200 - Success/Ok
// 201 - Created
// 404 - Not Found
// 400 - Bad Request
// 500 - Internal Server Error

// URL stand for Uniform Resource Locator.
// Resource is any type of data that we are storing into a database.

var users = [
  { id: 1, username: "JohnDoe", email: "JohnDoe@gmail.com" },
  { id: 2, username: "JaneDoe", email: "JaneDoe@gmail.com" },
  { id: 3, username: "JamesDoe", email: "JamesDoe@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("Hello World");
});

// get all users
app.get("/users", (req, res) => {
  res.status(200).send(users);
});

// get one users
app.get("/users/:id", (req, res) => {
  // We can find the id from the URL query parameters
  var id = parseInt(req.params.id);
  // find the user with matching id
  var user = users.find((u) => {
    // predicate/check for a record
    return u.id === id; // true or false
  });

  // if user is undefined, we return 404
  if (!user) {
    res.status(404).send({
      message: "User not found.",
    });
  }
  // default response
  res.status(200).send(user);
});

app.post("/api/login", (req, res) => {
  var email = req.body.email;
  var password = req.body.password;

  res.json("You have logged in as " + email);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

// Semantic Versioning
// Majot.Minor.Patch
// Caret(^): ^1.2.2 means install the latest version of 1.x.x
// Tilda(~): ~1.2.2 means install the latest version of 1.2.x

// How can we upate our packages?
// npm outdated
// npm update
// npm install <package>@1.2.2
// npm install <package>@latest
