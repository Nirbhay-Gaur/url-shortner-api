import express from "express";
import connectDB from "./config/db/db.js";

const app = express();

// Database
connectDB();

// Server Setup
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
