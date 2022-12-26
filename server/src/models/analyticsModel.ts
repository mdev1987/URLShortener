import { Schema, model, Document } from "mongoose";
import { ShortURL } from './shortUrlModel.js';

interface Analytics extends Document {
    shortUrl: ShortURL
}

const analyticsSchema = new Schema({
    shortUrl: {
        type: Schema.Types.ObjectId,
        ref: 'urls',
        required: true
    }
}, { timestamps: true })

export default model<Analytics>('analytics', analyticsSchema);