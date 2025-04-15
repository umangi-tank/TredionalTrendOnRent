import mongoose from "mongoose";

const collectionSchema = new mongoose.Schema({
  choliName: String,
  choliType: String,
  topwear: String,
  bottomwear: String,
  dupatta: String,
  setType: String,
  size: String,
  time: String,
  price: String,
  image: String,
});

const Collection = mongoose.model("Collection", collectionSchema);
export default Collection;
