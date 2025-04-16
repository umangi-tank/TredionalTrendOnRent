/* eslint-disable no-unused-vars */
// routes/collectionRoutes.js

import express from 'express';
import multer from 'multer';
import path from 'path';
import Collection from '../models/Collection.js';

const router = express.Router();

// Configure multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// GET all collections
router.get("/", async (req, res) => {
  try {
    const collections = await Collection.find();
    res.json(collections);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch collections" });
  }
});

//get route to manage collection
router.get("/api/collections", async (req, res) => {
  try {
    const collections = await Collection.find();
    res.json(collections);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch collections", error });
  }
});

//user collection show value
router.get('/collections', async (req, res) => {
  try {
    const collections = await Collection.find(); // fetch all collections
    res.status(200).json(collections);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error while fetching collections" });
  }
});

// POST route to add collection
router.post('/add-collection', upload.single('image'), async (req, res) => {
  console.log("Received body:", req.body);
  console.log("Received file:", req.file);
  try {
    const {
      choliName,
      choliType,
      topwearFabric,
      bottomwearFabric,
      dupattaType,
      rentalPrice,
      setType,
      rentalTime,
      setSize
    } = req.body;


    const newCollection = new Collection({
      choliName,
      choliType,
      topwearFabric,
      bottomwearFabric,
      dupattaType,
      rentalPrice,
      setType,
      rentalTime,
      setSize,
      image: req.file.filename 
    });

    await newCollection.save();
    res.json({ success: true, message: 'Collection added successfully' });

  } catch (err) {
    console.error('Error saving collection:', err);
    res.status(500).json({ success: false, message: 'Failed to add collection' ,error:err});
  }
});

// Edit collection route (PUT request)
router.put('/:id', async (req, res) => {
  try {
    const collectionId = req.params.id;
    const updatedCollection = await Collection.findByIdAndUpdate(
      collectionId, 
      req.body, 
      { new: true } // Return the updated document
    );

    if (!updatedCollection) {
      return res.status(404).json({ message: 'Collection not found' });
    }

    res.json(updatedCollection);
  } catch (error) {
    console.error('Error updating collection:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Delete collection route (DELETE request)
router.delete('/:id', async (req, res) => {
  try {
    const collectionId = req.params.id;
    const deletedCollection = await Collection.findByIdAndDelete(collectionId);

    if (!deletedCollection) {
      return res.status(404).json({ message: 'Collection not found' });
    }

    res.json({ message: 'Collection deleted successfully' });
  } catch (error) {
    console.error('Error deleting collection:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


export default router;
