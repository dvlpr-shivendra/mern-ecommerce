import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
    return (
        <Card className="my-3 p-3 rounded">
            <a href={`product/${product._id}`}>
                <Card.Img src={product.image} />

                <Card.Body>
                    <Card.Text as="div">
                        <Rating value={product.rating} text={`${product.numberOfReviews} reviews`} />
                    </Card.Text>

                    <Card.Text as="h3">
                        ${product.price}
                    </Card.Text>
                </Card.Body>
            </a>
        </Card>
    )
}

export default Product
