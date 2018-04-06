import mongoose, { Schema } from 'mongoose';
import getGoal from '../../tools/goal';

const productManagerSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'user' },
    product: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'product' },
    accountPassword: { type: String, required: true },
    subscriptionPeriod: { type: Number, required: true },
    amountTransferred: { type: Number, required: true },
    incomeAmount: { type: Number, required: true },
    numOfChildren: { type: Number, required: true },
    creditRating: { type: Number, required: true },
    amount: { type: Number, required: true, default: 0 },
    targetAmount: Number
}, { timestamps: true });

function remove__v(next) {
    this.select('-__v');
    return next();
}

function setTarget(next) {
    this.targetAmount = getGoal(this.incomeAmount, this.creditRating, this.numOfChildren);
    return next();
}

productManagerSchema.pre('save', setTarget);
productManagerSchema.pre('find', remove__v);
productManagerSchema.pre('findOne', remove__v);
productManagerSchema.pre('findById', remove__v);

export default mongoose.model('product-manager', productManagerSchema);