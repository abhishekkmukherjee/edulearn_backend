const express = require("express");
const cors = require("cors");
const connectDB = require('./db'); 
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

app.get("/api/health", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
