import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env

const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/wcsdb';

export async function connectToDatabase() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(MONGO_URL, {
        authSource: 'admin',
        user: 'admin', 
        pass: 'password',
        localPort: 27017,
        dbName: 'wcsdb',
        family: 4,
        hints: 'String',
        localAddress: '',
        lookup: 'dns.lookup'
    });
    console.log('Connected to MongoDB');
  }
}
