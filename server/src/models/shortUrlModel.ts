import { Schema, Document, model } from "mongoose";
import { customAlphabet } from "nanoid";

const nanid = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', 6);

export interface ShortURL extends Document {
    shortId: string,
    destination: string
}

const shortURLSchema = new Schema({
    shortId: {
        type: String,
        required: true,
        unique: true,
        default: () => nanid(),
    },
    destination: {
        type: String,
        required: true,
    }
}, { timestamps: true })

export default model<ShortURL>("short_url", shortURLSchema);