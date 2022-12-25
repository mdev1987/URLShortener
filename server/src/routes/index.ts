import { Router } from 'express'
import { createShortUrl, handleRedirect, getAnalytics } from '../controllers/shortUrlController';
import validateResource from '../middleware/validateResource';
import createShortUrlSchema from '../schemas/createShortUrlSchema';

const router = Router();

router.get('/healthcheck', (req, res) => {
    return res.send('health')
})

router.post('/api/url',
    validateResource(createShortUrlSchema),
    createShortUrl);
router.get("/api/analytics", getAnalytics);
router.get("/:shortId", handleRedirect);


export default router