/* eslint-disable no-unused-vars */
import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js'; // Ensure to use the ES module import syntax
const router = express.Router();

// Middleware for checking JWT
const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).send('Access denied. No token provided.');

  try {
    const decoded = jwt.verify(token, 'your_jwt_secret_key');
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(400).send('Invalid token.');
  }
};

// Get the user's profile
router.get('/profile', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) return res.status(404).send('User not found.');
    res.send(user);
  } catch (err) {
    res.status(500).send('Server error.');
  }
});

// Update the user's profile
router.put('/profile', authMiddleware, async (req, res) => {
  const { name, email, mobile, password } = req.body;

  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).send('User not found.');

    // Update the fields
    user.name = name || user.name;
    user.email = email || user.email;
    user.mobile = mobile || user.mobile;
    if (password) {
      user.password = await bcrypt.hash(password, 10); // Hash new password
    }

    await user.save();
    res.send('Profile updated successfully.');
  } catch (err) {
    res.status(500).send('Server error.');
  }
});

export default router; // Ensure you export as an ES module
