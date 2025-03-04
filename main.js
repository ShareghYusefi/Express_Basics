// What is express?
// Express is used to creatre a web server in node.js. Express works on a middleware concept (callback functions).

const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
