const mongoose = require('mongoose');
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

const conn = async () => {
  try {
    const dbConn = await mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.v7b2v.mongodb.net/?retryWrites=true&w=majority`);

    console.log('DB connected!');

    return dbConn;
  } catch (error) {
    console.log(error);
  }
};

conn();

module.exports = conn;
