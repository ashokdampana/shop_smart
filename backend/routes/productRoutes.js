import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

router.get('/products', async (req, res) => {
    const products = await Product.find();
    res.json( products );
})

router.post('/products', async (req, res) => {
    const [title, price, stock, category] = req.body;
    const newProduct = new product({
        title, price, stock, category
    })
    await newProduct.save();
    res.json( product );
})

export default router;