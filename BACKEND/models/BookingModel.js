// models/BookingModel.js
import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  choliName: { type: String, required: true },
  date: { type: String, required: true },
  duration: { type: String, required: true },
  startingHour: { type: String, required: true },
  contactNumber: { type: String, required: true },
  yourName: { type: String, required: true },
  emailAddress: { type: String, required: true },
  yourAddress: { type: String, required: true },
}, { timestamps: true });

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
