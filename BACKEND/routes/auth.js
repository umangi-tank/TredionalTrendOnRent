/* eslint-disable no-undef */
import express from 'express';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import User from '../models/User.js';


const router = express.Router();
//// Middleware to protect the route
const authenticateUser = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ success: false, message: "Unauthorized" });
  
    try {
      const decoded = jwt.verify(token, "your_secret_key"); // use same key from login
      req.user = decoded;
      next();
    } catch (err) {
      return res.status(401).json({ success: false, message: "Invalid token" });
    }
  };

// ✅ GET all users route (for UserRegistrationPage)
router.get('/users', async (req, res) => {
    try {
        const users = await User.find({}, { username: 1, email: 1, phone: 1, password: 1, _id: 0 });
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// ✅ POST login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: 'User not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ success: false, message: 'Invalid password' });
        }

        res.status(200).json({ success: true, message: 'Login successful' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// ✅ POST signup route
router.post('/signup', async (req, res) => {
    const { username, email, phone, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            username,
            email,
            phone,
            password: hashedPassword,
        });

        await newUser.save();
        res.status(201).json({ message: 'Registration successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});
// Route: PUT /api/users/update
router.put("/update", authenticateUser, async (req, res) => {
    try {
      const { name, email, mobile, password } = req.body;
      const hashedPassword = password ? await bcrypt.hash(password, 10) : undefined;
  
      const updateFields = {
        ...(name && { name }),
        ...(email && { email }),
        ...(mobile && { mobile }),
        ...(hashedPassword && { password: hashedPassword }),
      };
  
      const updatedUser = await User.findByIdAndUpdate(req.user.id, updateFields, { new: true });
  
      if (!updatedUser) {
        return res.status(404).json({ success: false, message: "User not found" });
      }
  
      res.status(200).json({ success: true, message: "Profile updated successfully", user: updatedUser });
    } catch (err) {
      console.error("Error updating profile:", err);
      res.status(500).json({ success: false, message: "Server error" });
    }
  });
  
export default router;
