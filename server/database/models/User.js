import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    accountNumber: { type: String, required: true },
    accountAmount: { type: Number, required: true, default: 2000000 }
}, { timestamps: true });

export default mongoose.model('user', userSchema);