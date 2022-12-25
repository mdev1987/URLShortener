import { Request, Response } from 'express';
import shortUrlModel from '../models/shortUrlModel';

export const createShortUrl = async (req: Request, res: Response) => {
    console.log(req.body)
    const { destination } = req.body;
    const newUrl = await shortUrlModel.create({
        destination
    })
    return res.json({
        shortUrl: newUrl
    })
}

export const handleRedirect = async (req: Request, res: Response) => {
    const { shortId } = req.params;
    const url = await shortUrlModel.findOne({
        shortId
    }).lean()

    if (url) {
        return res.json({ destination: url.destination })
    } else {
        return res.status(404).json({ message: 'shortId is not exists!' })
    }
}