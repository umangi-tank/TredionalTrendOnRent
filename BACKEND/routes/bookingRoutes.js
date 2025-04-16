/* eslint-disable no-unused-vars */
import express from "express";
import Booking from "../models/BookingModel.js";
import nodemailer from "nodemailer";

const router = express.Router();

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'umangitank99@gmail.com',
    pass: 'lhrb vvzd uqor ujyn', // Make sure to keep your password secure (consider using environment variables)
  },
});

// Create a new booking
router.post("/book", async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(201).json({ message: "Booking saved successfully!" });
  } catch (error) {
    console.error("Error saving booking:", error);
    res.status(500).json({ error: "Something went wrong while saving the booking." });
  }
});

// Get all bookings
router.get("/bookings", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
});

// Accept booking and send email
router.post('/bookings/accept/:bookingId', async (req, res) => {
  const { bookingId } = req.params;
  const { emailAddress, yourName } = req.body;

  try {
    await Booking.findByIdAndUpdate(bookingId, { status: 'Accepted' });

    const mailOptions = {
      from: '"Fashion Universe" <umangitank99@gmail.com>',
      to: emailAddress,
      subject: 'Booking Accepted',
      html: `<h1>Dear ${yourName},</h1><p>Your booking has been <strong>accepted</strong>! 🎉</p>`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Booking accepted and email sent' });
  } catch (error) {
    console.error('Error accepting booking:', error);
    res.status(500).json({ error: 'Failed to accept booking' });
  }
});

// Decline booking and send email
router.post('/bookings/decline/:bookingId', async (req, res) => {
  const { bookingId } = req.params;
  const { emailAddress, yourName } = req.body;

  try {
    await Booking.findByIdAndUpdate(bookingId, { status: 'Declined' });

    const mailOptions = {
      from: '"Fashion Universe" <umangitank99@gmail.com>',
      to: emailAddress,
      subject: 'Booking Declined',
      html: `<h1>Dear ${yourName},</h1><p>We regret to inform you that your booking has been <strong>declined</strong>.</p>`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Booking declined and email sent' });
  } catch (error) {
    console.error('Error declining booking:', error);
    res.status(500).json({ error: 'Failed to decline booking' });
  }
});

export default router;
