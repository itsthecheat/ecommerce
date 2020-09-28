import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const cartSchema = new Schema({
  user_id: { type: String, required: true, trim: true },
  product_id: { type: String, required: true, trim: true },
  price: { type: Number, required: true, trim: true },
  title: { type: String, required: true, trim: true }
}, {
  timestamps: true,
});

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;
