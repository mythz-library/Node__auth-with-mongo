const express = require("express");

// Create express application
const app = express();

const port = process.env.PORT || 5005;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
