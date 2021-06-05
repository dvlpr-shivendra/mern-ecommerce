const express = require('express')
const products = require('./data/products')

const app = express();

app.get('/api/products', function (req, res) {
    res.json(products)
})

app.get('/api/products/:id', function (req, res) {
    const product = products.find(product => product._id = req.params.id)
    res.json(product)
})

app.listen(8000, console.log('Server running on port 8000'))