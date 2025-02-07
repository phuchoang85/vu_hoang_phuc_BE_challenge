import dotenv from "dotenv";

dotenv.config(); // Load biến môi trường từ .env

export const config = {
  port: process.env.PORT || 3000,
  mongoURI: process.env.MONGO_URI || "mongodb://localhost:27017/mydatabase",
};
