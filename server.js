const env = require("./config/env");
const express = require("express");

// Create express application
const app = express();

// Create the server
app.listen(env.port, () => {
  console.log(`Server running on port ${env.port}`);
});
