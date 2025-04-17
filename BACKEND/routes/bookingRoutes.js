import express from "express";
import Booking from "../models/BookingModel.js";
import nodemailer from "nodemailer";

const router = express.Router();

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'umangitank99@gmail.com',
    pass: 'lhrb vvzd uqor ujyn',  // Use environment variables to secure passwords
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
    const booking = await Booking.findById(bookingId);

    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    // Update the booking status to 'Accepted'
    booking.status = 'Accepted';
    await booking.save();

    // Payment link (replace with your actual payment link)
    const paymentLink = "http://localhost:5173/paymentPage";

    // Send email
    const mailOptions = {
      from: '"Fashion Universe" <umangitank99@gmail.com>',
      to: emailAddress,
      subject: 'Booking Accepted',
      html: `
        <h1>Dear ${yourName},</h1>
        <p>Your booking has been <strong>accepted</strong>! 🎉</p>
        <p>To proceed with the payment, please click the link below:</p>
        <p><a href="${paymentLink}" target="_blank">Complete Payment</a></p>
      `,
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
    const booking = await Booking.findById(bookingId);

    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    // Update the booking status to 'Declined'
    booking.status = 'Declined';
    await booking.save();

    // Send email
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

// Edit booking
router.put('/bookings/edit/:bookingId', async (req, res) => {
  const { bookingId } = req.params;
  const updatedData = req.body;

  try {
    const booking = await Booking.findById(bookingId);

    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    // Update the booking with new data
    Object.assign(booking, updatedData);
    await booking.save();

    res.status(200).json({ message: 'Booking updated successfully', booking });
  } catch (error) {
    console.error('Error updating booking:', error);
    res.status(500).json({ error: 'Failed to update booking' });
  }
});

// Delete booking

// DELETE a booking by ID
router.delete("/api/bookings/:id", async (req, res) => {
  try {
    const deletedBooking = await Booking.findByIdAndDelete(req.params.id);
    if (!deletedBooking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    res.status(200).json({ message: "Booking deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Booking deleted successfully", error });
  }
});

export default router;
