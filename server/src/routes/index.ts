import { Router } from 'express'

const router = Router();

router.get('/healthcheck', (req, res) => {
    return res.send('health')
})

export default router