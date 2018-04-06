import mongoose, { Schema } from 'mongoose';

const historySchema = new Schema({
    from: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'user' },
    amount: { type: Number, required: true }
}, { timestamps: true });

export default mongoose.model('history', historySchema);