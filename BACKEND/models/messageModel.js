// models/messageModel.js
import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  mobileNumber: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Message = mongoose.model("Message", messageSchema);

export default Message;
