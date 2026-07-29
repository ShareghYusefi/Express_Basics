function logger(message) {
  console.log(message);
}

// export the logger function for use in other files
// logger without parenthesis is a reference to the function, not invoking it.
module.exports = logger;
