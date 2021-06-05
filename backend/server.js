const express = require('express')
const dotenv = require('dotenv')
const products = require('./data/products')

dotenv.config();

const app = express();

app.get('/api/products', function (req, res) {
    res.json(products)
})

app.get('/api/products/:id', function (req, res) {
    const product = products.find(product => product._id = req.params.id)
    res.json(product)
})

app.listen(process.env.PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`))