import { Schema, model, Document } from "mongoose";
import { ShortURL } from './shortUrlModel';

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