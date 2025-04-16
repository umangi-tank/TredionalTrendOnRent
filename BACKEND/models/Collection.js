import mongoose from "mongoose";

const collectionSchema = new mongoose.Schema({
  choliName: String,
  choliType: String,
  topwearFabric: String,
  bottomwearFabric: String,
  dupattaType: String,
  rentalPrice: Number,
  setType: String,
  rentalTime: String,
  setSize: String,
  image: String
});

const Collection = mongoose.model("Collection", collectionSchema);
export default Collection;
