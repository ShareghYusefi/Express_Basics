// What is express?
// Express is used to creatre a web server in node.js. Express works on a middleware concept (callback functions).

// import of express module/function
const express = require("express");
const app = express();

// a middleware is a function that has access to the request and response object
// you can think of a middleware as a layer that sits between the request and response objects
function customMiddleware(req, res, next) {
  console.log("Middleware function called");
  // next is a function that is called to move to the next middleware function
  next();
}

// use the middleware function
app.use(customMiddleware);

// localhost:3000/
app.get("/", function (req, res) {
  res.send("Hello World");
});

// localhost:3000/hello
app.get("/hello", function (req, res) {
  res.send("Hello World 2.0");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
