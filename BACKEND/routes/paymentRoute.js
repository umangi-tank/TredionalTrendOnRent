import express from 'express';
import Razorpay from 'razorpay';
import crypto from 'crypto';

const router = express.Router();

const instance = new Razorpay({
  key_id: 'rzp_test_x8tV5oSUixLmbV',
  key_secret: 'fWH4faC9rEJ9StONJyc8ZXCc',
});

router.post('/orders', async (req, res) => {
  const { amount } = req.body;

  const options = {
    amount: amount,
    currency: 'INR',
    receipt: 'receipt_order_74394',
  };

  try {
    const order = await instance.orders.create(options);
    res.json(order);
  } catch (error) {
    console.error('Order creation error:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

router.post('/verify', (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body.response;
  const key_secret = 'fWH4faC9rEJ9StONJyc8ZXCc';

  const hmac = crypto.createHmac('sha256', key_secret);
  hmac.update(`${razorpay_order_id}|${razorpay_payment_id}`);
  const generated_signature = hmac.digest('hex');

  if (generated_signature === razorpay_signature) {
    res.json({ success: true, message: 'Payment verified successfully' });
  } else {
    res.status(400).json({ success: false, message: 'Payment verification failed' });
  }
});

export default router;
