import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
    productId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Product', 
        required: true 
      },
    quantity: { type: Number, default: 1 },
    gallonType: {
        type: String,
        enum: ['new', 'refill'],
        default: 'new'
    }
});

const cartSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [cartItemSchema],
  });

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;