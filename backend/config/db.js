import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
let fl=false;
export const connectDB = async () => {
  if(fl)return;
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    fl=!!conn.connections[0].steadyState;
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
