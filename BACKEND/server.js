/* eslint-disable no-undef */
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import authRoutes from './routes/auth.js';
import collectionRoutes from './routes/collectionRoutes.js'; 
import bookingRoutes from './routes/bookingRoutes.js';
import profileRoutes from './routes/profileRoute.js';
import reviewRoute from './routes/reviewRoute.js';
import messageRoute from "./routes/messageRoute.js";
import forgetPasswordRoute from './routes/forgetPasswordRoute.js'; 
import paymentRoute from './routes/paymentRoute.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use('/uploads', express.static(path.resolve('uploads')));

// Debug: Log Mongo URI
console.log('MongoDB URI:', process.env.MONGODB_URI);

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

  app.use(cors());  // Enable CORS for all routes
// Routes
app.use('/api', authRoutes); // user-register
app.use('/api/collections', collectionRoutes); //Add-collection
app.use('/api', collectionRoutes); //user we dell in 
app.use("/api", bookingRoutes); //booking- collection
app.use('/api/profile', profileRoutes);  // profile
app.use('/api/reviews', reviewRoute);
app.use("/api/message", messageRoute);
app.use('/api/forgot-password', forgetPasswordRoute);
app.use('/uploads', express.static('uploads'));
app.use('/payment', paymentRoute);




// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
