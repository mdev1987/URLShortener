import express from 'express';
import config from 'config';
import router from './routes/index.js';
import { db } from './db.js';
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);
db();
app.listen(config.get('port'), () => console.log(`Server is running on port ${config.get('port')}`));
//# sourceMappingURL=app.js.map