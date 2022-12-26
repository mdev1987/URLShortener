import { Schema, model } from "mongoose";
import { customAlphabet } from "nanoid";
const nanid = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', 6);
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
}, { timestamps: true });
export default model("urls", shortURLSchema);
//# sourceMappingURL=shortUrlModel.js.map