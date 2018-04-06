import mongoose, { Schema } from 'mongoose';

const itemSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageLink: { type: String, required: true },
    price: { type: Number, required: true }
}, { timestamps: true });

export default mongoose.model('item', itemSchema);