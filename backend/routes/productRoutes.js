import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

router.post('/', async (req, res) => {
    const { title, price, stock, category } = req.body;
    if ( !title || !price || !stock || !category ) {
        res.status(400).json({message: "All fields required"})
    }
    const newProduct = new Product({ title, price, stock, category })
    await newProduct.save();
    res.status(201).json({ message: newProduct });
});

router.get('/', async (req, res) => {
    const products = await Product.find();
    if (! products ) return res.status(400).json({message: "No Products"})
    res.json({message: products });
});


export default router;
