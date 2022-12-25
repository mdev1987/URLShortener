var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import analyticsModel from '../models/analyticsModel.js';
import shortUrlModel from '../models/shortUrlModel.js';
export const createShortUrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { destination } = req.body;
        const newUrl = yield shortUrlModel.create({
            destination
        });
        return res.json({
            shortUrl: newUrl
        });
    }
    catch (ex) {
        return res.status(500).json({ message: ex.message });
    }
});
export const handleRedirect = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { shortId } = req.params;
        const url = yield shortUrlModel.findOne({
            shortId
        }).lean();
        if (!url)
            return res.status(404).json({ message: 'shortId is not exists!' });
        yield analyticsModel.create({ shortUrl: url._id });
        return res.json({ destination: url.destination });
    }
    catch (ex) {
        return res.status(500).json({ message: ex.message });
    }
});
export const getAnalytics = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const analytics = yield analyticsModel.find({}).lean();
        return res.json(analytics);
    }
    catch (ex) {
        return res.status(500).json({ message: ex.message });
    }
});
//# sourceMappingURL=shortUrlController.js.map