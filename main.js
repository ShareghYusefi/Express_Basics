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

// What is a Restful API?
// Restful stands for Representational State Transfer.
// API stands for Application Programming Interface.
// A way to design you URL's to interact with the server.

// API's use HTTP methods to interact with the server.
// GET - To get data from the server.
// POST - To send data to the server.
// PATCH - To update data on the server.
// PUT - To ovveride data objects on the server.
// DELETE - To delete data from the server.

// HTTP Status Codes
// These are codes used represent the status of a request.
// 200 - Success
// 201 - Created
// 404 - Not Found
// 400 - Bad Request
// 500 - Internal Server Error

// URL stands for Uniform Resource Locator
// Resource is any type of data that we are storing on the server.

// Mock data (instead of getting data from a database)
const users = [
  { id: 1, username: "JohnDoe", email: "JohnDoe@gmail.com" },
  { id: 2, username: "JaneDoe", email: "JaneDoe@gmail.com " },
  { id: 3, username: "JasonSmith", email: "JasonSmith@gmail.com" },
];

// localhost:3000/users
app.get("/users", function (req, res) {
  // Mock get data from a database
  res.status(200).send(users);
});

// localhost:3000/users/1
app.get("/users/:id", function (req, res) {
  // we can get id from query paramaters (query parameters are sent through the URL)
  let id = parseInt(req.params.id); // convert string to integer
  // find the user with the id
  let user = users.find((u) => u.id === id); // (u) => { return u.id === id }  <=====>  (u) => u.id === id
  // if the use is not found
  if (!user) {
    res.status(404).send("User not found");
    return; // return to stop the function here
  }

  // if the user is found
  res.status(200).send(user);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
