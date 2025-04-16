import express from 'express';
import Review from '../models/Review.js';

const router = express.Router();

router.post('/submit-review', async (req, res) => {
    try {
      const { name, email, message } = req.body;
      const newReview = new Review({ name, email, message });
      await newReview.save();
      res.status(201).json({ message: 'Review saved successfully' });
    } catch (error) {
      console.error('Error saving review:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });

  // Route to fetch all reviews
router.get('/reviews', async (req, res) => {
    try {
      const reviews = await Review.find(); // Fetch all reviews from the database
      res.status(200).json(reviews); // Send reviews as response
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching reviews' });
    }
  });

export default router;
