import { models, model, Schema } from "mongoose";

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  des: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    Immutable: true,
  },
  updateAt: {
    type: Date,
    default: () => Date.now(),
  },
  
  like: {
    type: Number,
    default: 0,
  },
});

const Product = models.Product || model("Product", productSchema);


export default Product;
