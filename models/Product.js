const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    img: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    desc:{type: String,required:true}
  },
  { timestamps: true }
);
mongoose.models = {}
export default mongoose.model("Product", ProductSchema);
