import mongoose, { Schema } from 'mongoose';

const productSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, required: true },
    product: { type: mongoose.Schema.Types.ObjectId, required: true },
    newAmount: { type: Number, required: true },
    accountPassword: { type: String, required: true, maxlength: 4 },
    subscriptionPeriod: { type: Number, required: true },
    amountTransferred: { type: Number, required: true },
    incomeAmount: { type: Number, required: true },
    numOfChildren: { type: Number, required: true },
    creditRating: { type: Number, required: true },
    currentAmount: { type: Number, required: true, default: 0 },

}, { timestamps: true });

export default mongoose.model('product', productSchema);