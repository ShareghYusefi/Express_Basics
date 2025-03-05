// What is express?
// Express is used to creatre a web server in node.js. Express works on a middleware concept (callback functions).

// import of express module/function
const express = require("express");
const app = express();

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
