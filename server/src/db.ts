import config from 'config';
import mongoose from 'mongoose';

export const db = async () => {
    mongoose.set('strictQuery', false);
    mongoose.connect(config.get('mongodb')).then(() => {
        console.log('Successfully connected to database')
    }).catch((ex: any) => console.log(`Error connecting to database: ${ex.message}`))
}