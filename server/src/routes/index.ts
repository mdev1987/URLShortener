import { Router } from 'express'
import { createShortUrl, handleRedirect, getAnalytics }
    from '../controllers/shortUrlController.js';
import validateResource from '../middleware/validateResource.js';
import createShortUrlSchema from '../schemas/createShortUrlSchema.js';

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