import express from 'express';
import config from 'config';
import router from './routes/index';

const app = express();
app.use(router);

app.listen(config.get('port'),
    () => console.log(`Server is running on port ${config.get('port')}`));