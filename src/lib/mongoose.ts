import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env

const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/sveltekit_db';

export async function connectToDatabase() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(MONGO_URL);
    console.log('Connected to MongoDB');
  }
}
