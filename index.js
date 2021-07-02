import express from "express";
import connectDB from "./config/db/db.js";
import dotenv from "dotenv";
import indexRouter from "./routes/index.js";
import urlsRouter from "./routes/urls.js";

const app = express();

// dotEnv Config
dotenv.config();

// Database
connectDB();

// Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Router
app.use("/", indexRouter);
app.use("/api", urlsRouter);

// Server Setup
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
