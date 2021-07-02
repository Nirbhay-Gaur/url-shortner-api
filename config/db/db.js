import mongoose from "mongoose";
import dotEnv from "dotenv";

// dotEnv Config
dotEnv.config();

// DB Config
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.URI_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;
