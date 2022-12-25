import { Schema, model } from "mongoose";
const analyticsSchema = new Schema({
    shortUrl: {
        type: Schema.Types.ObjectId,
        ref: 'urls',
        required: true
    }
}, { timestamps: true });
export default model('analytics', analyticsSchema);
//# sourceMappingURL=analyticsModel.js.map