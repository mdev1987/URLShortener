import { Router } from 'express'
import { createShortUrl, handleRedirect } from '../controllers/shortUrlController';

const router = Router();

router.get('/healthcheck', (req, res) => {
    return res.send('health')
})

router.post('/api/url', createShortUrl);

router.get("/:shortId", handleRedirect)

export default router