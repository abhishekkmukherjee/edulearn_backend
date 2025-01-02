require('dotenv').config(); // Load environment variables

const mongoose = require('mongoose');

// MongoDB connection function
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected Successfully!');
  } catch (error) {
    console.error('MongoDB Connection Failed:', error.message);
    process.exit(1); // Exit the application on failure
  }
};

module.exports = connectDB;