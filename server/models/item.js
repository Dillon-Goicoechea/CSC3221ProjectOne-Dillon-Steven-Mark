import mongoose from 'mongoose';
const itemSchema = new mongoose.Schema({
"priority": int,
"item": String,
}, { timestamps: true });
const Item = mongoose.model('post', itemSchema);
export default Item;