import { Request, Response } from 'express';
import analyticsModel from '../models/analyticsModel.js';
import shortUrlModel from '../models/shortUrlModel.js';

export const createShortUrl = async (req: Request, res: Response) => {
    try {
        const { destination } = req.body;
        const url = await shortUrlModel.findOne({ destination }).lean();
        if (url) {
            return res.json({
                shortUrl: url
            })
        }
        const newUrl = await shortUrlModel.create({
            destination
        })
        return res.json({
            shortUrl: newUrl
        })
    } catch (ex: any) {
        return res.status(500).json({ message: ex.message })
    }

}

export const handleRedirect = async (req: Request, res: Response) => {
    try {
        const { shortId } = req.params;
        const url = await shortUrlModel.findOne({
            shortId
        }).lean()

        if (!url)
            return res.status(404).json({ message: 'shortId is not exists!' })

        await analyticsModel.create({ shortUrl: url._id })
        return res.json({ destination: url.destination })
    } catch (ex: any) {
        return res.status(500).json({ message: ex.message })
    }
}

export const getAnalytics = async (req: Request, res: Response) => {
    try {
        const analytics = await analyticsModel.find({}).lean();
        return res.json(analytics)
    } catch (ex: any) {
        return res.status(500).json({ message: ex.message })
    }
}