import express from 'express';
import config from 'config';
import cors from 'cors';
import router from './routes/index.js';
import { db } from './db.js';


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
    origin: config.get('origin'),
}));
app.use(router);

db();
app.listen(config.get('port'),
    () => console.log(`Server is running on port ${config.get('port')}`));