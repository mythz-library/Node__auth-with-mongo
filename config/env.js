// Load environment variables from .env file
require("dotenv").config();

module.exports = {
  port: process.env.PORT || 5005,
  mongoURI: process.env.MONGO_URI,
  dbConfig: {
    dbName: process.env.MONGO_DB_NAME || "defaultDB",
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  },
};
