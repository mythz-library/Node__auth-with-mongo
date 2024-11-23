const mongoose = require("mongoose");
const env = require("./env");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(env.mongoURI, env.dbConfig);

    // console.log(`MongoDB Connected: ${conn.connection.host}`);
    console.log(
      `MongoDB Connected to Database: ${conn.connection.db.databaseName}`
    );
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
