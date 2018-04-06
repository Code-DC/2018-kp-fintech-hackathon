import mongoose, { Schema } from 'mongoose';

const productSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    profitRate: { type: Number, required: true, max: 1 }
}, { timestamps: true });

export default mongoose.model('product', productSchema);