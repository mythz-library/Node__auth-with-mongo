const env = require("./config/env");
const users = require("./routes/users");
const express = require("express");
const connectDB = require("./config/database");

// Create express application
const app = express();

// Connect to DB
connectDB();

app.use(express.json());
app.use("/api/auth", users);

// Create the server
app.listen(env.port, () => {
  console.log(`Server running on port ${env.port}`);
});
