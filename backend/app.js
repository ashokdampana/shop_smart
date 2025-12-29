import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';

dotenv.config();

const app = express();
app.use( express.json());
app.use( morgan('dev'));
app.use( cors());

app.get('/', (req, res) => {
    res.send('Server working...')
})

import productRoutes from './routes/productRoutes.js';
app.use('/api/products', productRoutes);

export default app;
