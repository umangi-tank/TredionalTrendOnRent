/* eslint-disable no-unused-vars */
// routes/messageRoute.js
import express from "express";
import Message from "../models/messageModel.js";

const router = express.Router();

// POST route to store message
router.post("/submit", async (req, res) => {
  const { mobileNumber, message } = req.body;

  if (!mobileNumber || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const newMessage = new Message({ mobileNumber, message });
    await newMessage.save();
    res.status(201).json({ success: true, message: "Saved to database" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
