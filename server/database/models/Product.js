import mongoose, { Schema } from 'mongoose';

const productSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    profitRate: { type: Number, required: true, max: 1 }
}, { timestamps: true });


function remove__v(next) {
    this.select('-__v');
    return next();
}

productSchema.pre('find', remove__v);
productSchema.pre('findOne', remove__v);
productSchema.pre('findById', remove__v);

export default mongoose.model('product', productSchema);