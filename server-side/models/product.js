import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  product_name: {
    type: String,
    required: true,
  },
  product_type: {
    type: String,
    required: false,
  },
  container_type: {
    type: String,
    required: true,
  },
  price: {
    type: mongoose.Schema.Types.Decimal128, 
    required: true,
  },
  product_image: {
    type: String,
    required: true
  }
},{
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);

export default Product;