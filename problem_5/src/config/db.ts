import mongoose from "mongoose";
import { config } from "./config";

mongoose.set("strictQuery", false);

export const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoURI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};
