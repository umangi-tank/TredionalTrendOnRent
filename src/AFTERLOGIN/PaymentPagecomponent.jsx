
import axios from 'axios';
import { useState } from 'react';

const PaymentPagecomponent = () => {
  const [amount, setAmount] = useState('');  // Initially empty
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');

  // Handle payment
  const handlePayment = async () => {
    if (!amount || !name || !email || !contact) {
      alert('Please fill out all fields');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/payment/orders', {
        amount: amount * 100, // Convert rupees to paise
      });

      const { id: order_id, amount: orderAmount, currency } = response.data;

      const options = {
        key: 'rzp_test_x8tV5oSUixLmbV', // replace with live key later
        amount: orderAmount,
        currency,
        name: 'Fashion Universe',
        description: 'Test Transaction',
        order_id,
        handler: async function (response) {
          // eslint-disable-next-line no-unused-vars
          const res = await axios.post('http://localhost:5000/payment/verify', {
            response,
          });
          alert('Payment successful');
        },
        prefill: {
          name: name,
          email: email,
          contact: contact,
        },
        theme: {
          color: '#3399cc',
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error(error);
      alert('Payment failed. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Make Payment</h2>

      <div className="payment-box shadow p-4 rounded">
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">Enter Amount (₹)</label>
          <input
            type="number"
            id="amount"
            className="form-control"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount in ₹"
            min="1"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">Your Name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="contact" className="form-label">Contact Number</label>
          <input
            type="text"
            id="contact"
            className="form-control"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Enter your contact number"
          />
        </div>

        <div className="text-center">
          <button 
            onClick={handlePayment} 
            className="btn" 
            style={{ backgroundColor: '#541222', color: '#fff' }}
          >
            PAY NOW{amount}  {/* Display amount in rupees */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPagecomponent;
