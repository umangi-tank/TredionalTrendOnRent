import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

router.post('/send-reset-link', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required.' });
  }

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'umangitank99@gmail.com',
        pass: 'lhrb vvzd uqor ujyn',
      },
    });

    // Mail options
    const mailOptions = {
      from: 'umangitank99@gmail.com',
      to: email,
      subject: 'Password Reset',
      html: `<p>You requested a password reset. Click <a href="http://localhost:5173/ForgetPasswordPage">here</a> to reset your password.</p>`,
    };

    await transporter.sendMail(mailOptions);
    res.json({ message: 'Password reset link has been sent.' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email.' });
  }
});

export default router;
