const env = require("./config/env");
const users = require("./routes/users");
const auth = require("./routes/auth");
const express = require("express");
const connectDB = require("./config/database");

// Create express application
const app = express();

// Connect to DB
connectDB();

app.use(express.json());
app.use("/api/users", users);
app.use("/api/auth", auth);

// Create the server
app.listen(env.port, () => {
  console.log(`Server running on port ${env.port}`);
});
