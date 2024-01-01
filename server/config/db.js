import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
dotenv.config();
const url = process.env.DB_URL;
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(url);
    console.log(`Connected to mongodb Databse ${conn.connection.host}`.bgMagenta.white);
  } catch (error) {
    console.log(`Error in Mongodb ${error}`.bgRed.white);
  }
};

export default connectDB;