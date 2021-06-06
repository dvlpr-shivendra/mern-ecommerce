import express from 'express'
import asyncHandler from 'express-async-handler'
import Product from "../models/Product.js";

const router = express.Router()

router.get('/', asyncHandler(async function (req, res) {
    const products = await Product.find({})
    res.json(products)
}))

router.get('/:id', asyncHandler(async function (req, res) {
    const product = await Product.findById(req.params.id)

    if (product) {
        res.json(product)
    } else {
        res.status(404).json({ message: 'Product not found' })
    }
}))

export default router;